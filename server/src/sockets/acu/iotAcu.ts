import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { AcuData, Topics, IotAcuRealtimeArrayObject} from "../../types/acu.js";
import http from "http";

let AcuIotData: IotAcuRealtimeArrayObject = {
  arrayVoltageDataRealTime: [],
  arrayCurrentDataRealTime: [],
  arrayPowerDataRealTime: [],
  arrayImportedDataRealTime: [],
  arrayExportedDataRealTime: [],
  arrayNetDataRealTime: [],
  arrayTotalDataRealTime: [],

}

acu.on("connect", function () {
  console.log("Connected to AWS IoT");
  acu.subscribe(Topics.DC_DATA);
});

function AcuSocketController(server: http.Server) {
  const io = new Server(server);

  io.on("connection", () => {
    acu.on("message", function (topic: string, payload: object) {
      console.log("Message received on:", topic);
      const dataRealTime= JSON.parse(payload.toString()) as AcuData;

      if (AcuIotData.arrayCurrentDataRealTime.length > 100) {
        AcuIotData.arrayCurrentDataRealTime.shift();
      }

      if (AcuIotData.arrayVoltageDataRealTime.length > 100) {
        AcuIotData.arrayVoltageDataRealTime.shift();
      }

      if (AcuIotData.arrayPowerDataRealTime.length > 100) {
        AcuIotData.arrayPowerDataRealTime.shift();
      }

      if (AcuIotData.arrayImportedDataRealTime.length > 100) {
        AcuIotData.arrayImportedDataRealTime.shift();
      }

      if (AcuIotData.arrayExportedDataRealTime.length > 100) {
        AcuIotData.arrayExportedDataRealTime.shift();
      }

      if (AcuIotData.arrayNetDataRealTime.length > 100) {
        AcuIotData.arrayNetDataRealTime.shift();
      }

      if (AcuIotData.arrayTotalDataRealTime.length > 100) {
        AcuIotData.arrayTotalDataRealTime.shift();
      }

      AcuIotData.arrayCurrentDataRealTime.push(dataRealTime.current);
      AcuIotData.arrayVoltageDataRealTime.push(dataRealTime.voltage)
      AcuIotData.arrayPowerDataRealTime.push(dataRealTime.power)
      AcuIotData.arrayImportedDataRealTime.push(dataRealTime.energies.imported)
      AcuIotData.arrayExportedDataRealTime.push(dataRealTime.energies.exported)
      AcuIotData.arrayNetDataRealTime.push(dataRealTime.energies.net)
      AcuIotData.arrayTotalDataRealTime.push(dataRealTime.energies.total)


      io.emit("dataRealTimeVoltage", AcuIotData.arrayVoltageDataRealTime);
      io.emit("dataRealTimeCurrent", AcuIotData.arrayVoltageDataRealTime);
      io.emit("dataRealTimePower", AcuIotData.arrayPowerDataRealTime);
      io.emit("dataRealTimeImportedEnergy", AcuIotData.arrayImportedDataRealTime);
      io.emit("dataRealTimeExportedEnergy", AcuIotData.arrayExportedDataRealTime);
      io.emit("dataRealTimeNetEnergy", AcuIotData.arrayNetDataRealTime);
      io.emit("dataRealTimeTotalEnergy", AcuIotData.arrayTotalDataRealTime);
    });
  });
}

export default AcuSocketController;
