import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Voltage, AcuData } from "../../types/acu.js";
import http from "http";

let arrayDataRealTime: Voltage[] = [];

acu.on("connect", function () {
  console.log("Connected to AWS IoT");
  acu.subscribe("DC_DATA");
});

function socketController(server: http.Server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    acu.on("message", function (topic, payload) {
      console.log("Message received:", topic);
      const dataRealTime = JSON.parse(payload.toString()) as AcuData;

      if (arrayDataRealTime.length > 100) {
        arrayDataRealTime.shift();
      }
      arrayDataRealTime.push(dataRealTime.voltage);
      io.emit("dataRealTime", arrayDataRealTime);
    });
  });
}

export default socketController;
