import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Current, AcuData, Topics, Voltage } from "../../types/acu.js";
import http from "http";

let arrayCurrentDataRealTime: Current[] = [];
let arrayVoltageDataRealTime: Voltage[] = [];

acu.on("connect", function () {
  console.log("Connected to AWS IoT");
  acu.subscribe(Topics.DC_DATA);
});

function AcuSocketController(server: http.Server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    acu.on("message", function (topic: string, payload: object) {
      console.log("Message received:", topic);
      const dataRealTime= JSON.parse(payload.toString()) as AcuData;

      if (arrayCurrentDataRealTime.length > 100) {
        arrayCurrentDataRealTime.shift();
      }

      if (arrayVoltageDataRealTime.length > 100) {
        arrayVoltageDataRealTime.shift();
      }

      arrayCurrentDataRealTime.push(dataRealTime.current);
      arrayVoltageDataRealTime.push(dataRealTime.voltage)

      io.emit("dataRealTimeCurrent", arrayCurrentDataRealTime);
      io.emit("dataRealTimeVoltage", arrayVoltageDataRealTime);
    });
  });
}

export default AcuSocketController;
