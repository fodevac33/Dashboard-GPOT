import path from "path";
import awsIot from "aws-iot-device-sdk";
import { fileURLToPath } from 'url';
import { Server } from "socket.io";


//
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let arrayDataRealTime = [];


const device = awsIot.device({
  keyPath: path.resolve(__dirname, "../../../IoTConection/Subscriber/certs/private.pem.key"),
  certPath: path.resolve(__dirname, "../../../IoTConection/Subscriber/certs/device.pem.crt"),
  caPath: path.resolve(__dirname, "../../../IoTConection/Subscriber/certs/AmazonRootCA1.pem"),
  clientId: "JS-Subscriber",
  host: "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
});

device.on("connect", function () {
  console.log("Connected to AWS IoT");
  device.subscribe("DC_DATA");
});

device.on("message", function (topic, payload) {
  console.log("Message received:", topic, payload.toString());
  console.log(typeof payload);
  // execute your function here
  
});


function socketController(server) {
    const io = new Server(server);
    io.on("connection", (socket) => {
      device.on("message", function (topic, payload) {
        console.log("Message received:", topic, payload.toString());
        const dataRealTime = JSON.parse(payload.toString());
        arrayDataRealTime.push(dataRealTime["voltage"]);
        io.emit("dataRealTime", arrayDataRealTime);
    });
  });
};

export default socketController;