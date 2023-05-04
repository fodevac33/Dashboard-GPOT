import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Topics } from "../../types/acu.js";
let arrayDataRealTime = [];
acu.on("connect", function () {
    console.log("Connected to AWS IoT");
    acu.subscribe(Topics.DC_DATA);
});
function socketControllerCurrent(server) {
    const io = new Server(server);
    io.on("connection", (socket) => {
        acu.on("message", function (topic, payload) {
            console.log("Message received:", topic);
            const dataRealTimeCurrent = JSON.parse(payload.toString());
            if (arrayDataRealTime.length > 100) {
                arrayDataRealTime.shift();
            }
            arrayDataRealTime.push(dataRealTimeCurrent.current);
            io.emit("dataRealTimeCurrent", arrayDataRealTime);
        });
    });
}
export default socketControllerCurrent;
//# sourceMappingURL=iotAcuCurrent.js.map