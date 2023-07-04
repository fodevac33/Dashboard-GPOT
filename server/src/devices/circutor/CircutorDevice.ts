import path from "path";
import awsIot from "aws-iot-device-sdk";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const circutor = new awsIot.device({
  keyPath: path.resolve(__dirname, "../certs/circutor/Circutor-private.pem.key"),
  certPath: path.resolve(__dirname, "../certs/circutor/Circutor-certificate.pem.crt"),
  caPath: path.resolve(__dirname, "../certs/circutor/AmazonRootCA1.pem"),
  clientId: "Circutor-Subscriber",
  host: "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
});

export default circutor;
