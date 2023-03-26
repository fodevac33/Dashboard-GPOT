import express from "express";
import { Server } from "socket.io";
const app = express();
const io = new Server(server);
io.listen(3000);
app.get("/", (req, res) => {
    res.send("Hi from TypeScript");
});
//# sourceMappingURL=index.js.map