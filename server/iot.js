// npm install aws-iot-device-sdk

const awsIot = require("aws-iot-device-sdk");
const path = require("path");

const device = awsIot.device({
  keyPath: path.resolve(__dirname, "./certs/private.pem.key"),
  certPath: path.resolve(__dirname, "./certs/device.pem.crt"),
  caPath: path.resolve(__dirname, "./certs/AmazonRootCA1.pem"),
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
