import { Server } from "socket.io";
import AcuVoltage from "../../models/acu/AcuVoltage.js";

function socketController(server) {
  const io = new Server(server);
  io.on("connection", (socket) => {
    setInterval(async () => {
      const dataRealTime = await AcuVoltage.find({});
      io.emit("dataRealTime", dataRealTime);
    }, 200);
  });
}

export default socketController;
