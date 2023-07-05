import { Server } from "socket.io";
import circutor from "../../devices/circutor/CircutorDevice.js";
import { Topics } from "../../types/generic.js";
import { RecievedData } from "../../types/circutor/circutorTypes.js";
import { rawDataToRealData } from "../../types/circutor/circutorMethods.js";


function circutorSocketController(io: Server) {

  circutor.on("connect", function () {
    console.log("Circutor connected to AWS IoT");
    circutor.subscribe(Topics.CIRCUTOR);
  });

  circutor.on("message", function (topic: string, payload: object) {
    if (topic === Topics.CIRCUTOR) {
      console.log("Message received on:", topic);

      const dataRealTime= JSON.parse(payload.toString()) as RecievedData;

      let realData = rawDataToRealData(dataRealTime);

      console.log(realData);
    }
  });
}

export default circutorSocketController;

