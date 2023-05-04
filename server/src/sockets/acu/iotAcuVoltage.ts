import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Voltage, AcuData, Topics } from "../../types/acu.js";
import http from "http";

let arrayDataRealTime: Voltage[] = [];

acu.on("connect", function () {
  console.log("Connected to AWS IoT");
  acu.subscribe(Topics.DC_DATA);
});

function socketControllerVoltage(server: http.Server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    acu.on("message", function (topic: string, payload: object) {
      console.log("Message received:", topic);
      const dataRealTimeVoltage = JSON.parse(payload.toString()) as AcuData;

      if (arrayDataRealTime.length > 100) {
        arrayDataRealTime.shift();
      }
      arrayDataRealTime.push(dataRealTimeVoltage.voltage);
      io.emit("dataRealTimeVoltage", arrayDataRealTime);
    });
  });
}

export default socketControllerVoltage;
