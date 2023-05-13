import { Server } from "socket.io";
import http from "http";

import acu from "../../devices/acu/AcuDevice.js";
import { AcuData, Topics, IotAcuRealtimeArrayObject} from "../../types/acuTypes.js";
import { preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays} from "../../types/acuMethods.js";

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

      preventArrayDataOverflow(100, AcuIotData);

      appendAcuDataToRealTimeArray(AcuIotData, dataRealTime);

      emitRealTimeArrays(io, AcuIotData);
    });
  });
}

export default AcuSocketController;

