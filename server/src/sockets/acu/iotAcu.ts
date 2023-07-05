import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Topics } from "../../types/generic.js";
import { AcuData,  IotAcuRealtimeArrays} from "../../types/acu/acuTypes.js";
import { preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays} from "../../types/acu/acuMethods.js";

let AcuIotData: IotAcuRealtimeArrays = {
  arrayVoltage: [],
  arrayCurrent: [],
  arrayPower: [],
  arrayImported: [],
  arrayExported: [],
  arrayNet: [],
  arrayTotal: [],
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

      preventArrayDataOverflow(300, AcuIotData);

      appendAcuDataToRealTimeArray(AcuIotData, dataRealTime);

      emitRealTimeArrays(io, AcuIotData)
    }
  });
}

export default acuSocketController;

