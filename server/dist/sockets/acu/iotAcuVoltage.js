import { Server } from "socket.io";
import acu from "../../devices/acu/AcuDevice.js";
let arrayDataRealTime = [];
acu.on("connect", function () {
    console.log("Connected to AWS IoT");
    acu.subscribe("DC_DATA");
});
function socketController(server) {
    const io = new Server(server);
    io.on("connection", (socket) => {
        acu.on("message", function (topic, payload) {
            console.log("Message received:", topic);
            const dataRealTime = JSON.parse(payload.toString());
            if (arrayDataRealTime.length > 100) {
                arrayDataRealTime.shift();
            }
            arrayDataRealTime.push(dataRealTime.voltage);
            io.emit("dataRealTime", arrayDataRealTime);
        });
    });
}
export default socketController;
//# sourceMappingURL=iotAcuVoltage.js.map