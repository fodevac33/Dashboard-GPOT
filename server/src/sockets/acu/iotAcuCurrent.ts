import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Current, AcuData, Topics } from "../../types/acu.js";
import http from "http";

let arrayDataRealTime: Current[] = [];

acu.on("connect", function () {
  console.log("Connected to AWS IoT");
  acu.subscribe(Topics.DC_DATA);
});

function socketControllerCurrent(server: http.Server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    acu.on("message", function (topic: Topics, payload: object) {
      console.log("Message received:", topic);
      const dataRealTimeCurrent = JSON.parse(payload.toString()) as AcuData;

      if (arrayDataRealTime.length > 100) {
        arrayDataRealTime.shift();
      }
      arrayDataRealTime.push(dataRealTimeCurrent.current);
      io.emit("dataRealTimeCurrent", arrayDataRealTime);
    });
  });
}

export default socketControllerCurrent;
