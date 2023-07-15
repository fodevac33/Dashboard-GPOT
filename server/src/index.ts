import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import acuvoltageRoutes from "./routes/acu/acuvoltage.js";
import { createServer } from "http";

import acuSocketController from "./sockets/acu/iotAcu.js";
import circutorSocketController from "./sockets/circutor/iotCircutor.js";

import { Server } from "socket.io";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
const http = createServer(app);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes*/
app.use("/acuvoltage", acuvoltageRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(async () => {
    http.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));


const io = new Server(http);

io.on("connection", () => {
  console.log("Conection detected");
});

circutorSocketController(io);
acuSocketController(io);

