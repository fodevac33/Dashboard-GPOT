import { Server } from "socket.io";
import circutor from "../../devices/circutor/CircutorDevice.js";
import { Topics } from "../../types/generic.js";
import { IotCircutorRealtimeArrays, RecievedData } from "../../types/circutor/circutorTypes.js";
import { rawDataToRealData, appendCircutorDataToRealtimeArray } from "../../types/circutor/circutorMethods.js";


let CircutorIotData: IotCircutorRealtimeArrays = {
  arrayL1_VOLTAGE: [],
  arrayL2_VOLTAGE: [],
  arrayL3_VOLTAGE: [],

  arrayL1_CURRENT: [],
  arrayL2_CURRENT: [],
  arrayL3_CURRENT: [],

  arrayL1_ACTIVE_POWER: [],
  arrayL2_ACTIVE_POWER: [],
  arrayL3_ACTIVE_POWER: [],

  arrayANGLE_V1_V2: [],
  arrayANGLE_V2_V3: [],
  arrayANGLE_V3_V1: [],
}


function circutorSocketController(io: Server) {

  circutor.on("connect", function () {
    console.log("Circutor connected to AWS IoT");
    circutor.subscribe(Topics.CIRCUTOR);
  });

  circutor.on("message", function (topic: string, payload: object) {
    if (topic === Topics.CIRCUTOR) {
      console.log("Message received on:", topic);

      const dataRealTime= JSON.parse(payload.toString()) as RecievedData;

      const realData = rawDataToRealData(dataRealTime);

      appendCircutorDataToRealtimeArray(CircutorIotData, realData, 100);

      console.log(CircutorIotData);
    }
  });
}

export default circutorSocketController;

