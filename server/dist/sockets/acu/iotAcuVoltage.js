import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
import { Topics } from "../../types/acu.js";
let arrayDataRealTime = [];
acu.on("connect", function () {
    console.log("Connected to AWS IoT");
    acu.subscribe(Topics.DC_DATA);
});
function socketControllerVoltage(server) {
    const io = new Server(server);
    io.on("connection", (socket) => {
        acu.on("message", function (topic, payload) {
            console.log("Message received:", topic);
            const dataRealTimeVoltage = JSON.parse(payload.toString());
            if (arrayDataRealTime.length > 100) {
                arrayDataRealTime.shift();
            }
            arrayDataRealTime.push(dataRealTimeVoltage.voltage);
            io.emit("dataRealTimeVoltage", arrayDataRealTime);
        });
    });
}
export default socketControllerVoltage;
//# sourceMappingURL=iotAcuVoltage.js.map