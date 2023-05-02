import { Server } from "socket.io";
import AcuVoltage from "../../models/acu/AcuVoltage.js";

function socketController(server) {
  const io = new Server(server);
  io.on("connection", (socket) => {
    setInterval(async () => {
      const dataRealTime = await AcuVoltage.find({});
      console.log(dataRealTime);
      io.emit("dataRealTime", dataRealTime);
    }, 2000);
  });
}

export default socketController;
