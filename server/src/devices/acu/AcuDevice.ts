import path from "path";
import awsIot from "aws-iot-device-sdk";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const acu = new awsIot.device({
  keyPath: path.resolve(__dirname, "../certs/acu/private.pem.key"),
  certPath: path.resolve(__dirname, "../certs/acu/device.pem.crt"),
  caPath: path.resolve(__dirname, "../certs/acu/AmazonRootCA1.pem"),
  clientId: "JS-Subscriber",
  host: "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
});

export default acu;
