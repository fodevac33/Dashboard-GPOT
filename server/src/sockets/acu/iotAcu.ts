import { Server } from "socket.io";
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


function acuSocketController(io: Server) {

  acu.on("connect", function () {
    console.log("Connected to AWS IoT");
    acu.subscribe(Topics.DC_DATA);
  });

  acu.on("message", function (topic: string, payload: object) {
    if (topic === Topics.DC_DATA) {
      console.log("Message received on:", topic);
      const dataRealTime= JSON.parse(payload.toString()) as AcuData;

      preventArrayDataOverflow(100, AcuIotData);

      appendAcuDataToRealTimeArray(AcuIotData, dataRealTime);

      emitRealTimeArrays(io, AcuIotData)
    }
  });
}

export default acuSocketController;

