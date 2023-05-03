import path from "path";
import awsIot from "aws-iot-device-sdk";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const acu = awsIot.device({
    keyPath: path.resolve(__dirname, "../certs/private.pem.key"),
    certPath: path.resolve(__dirname, "../certs/device.pem.crt"),
    caPath: path.resolve(__dirname, "../certs/AmazonRootCA1.pem"),
    clientId: "JS-Subscriber",
    host: "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
});
export default acu;
//# sourceMappingURL=AcuDevice.js.map