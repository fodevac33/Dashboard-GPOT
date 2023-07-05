import { IotAcuRealtimeArrayObject, AcuSocketEventEmmiters, AcuData} from "./acuTypes.js";
import { Server } from "socket.io";

function preventArrayDataOverflow(max_data: number, arrayObject: IotAcuRealtimeArrayObject) {
  for (const key in arrayObject) {
    if (arrayObject[key as keyof IotAcuRealtimeArrayObject].length > max_data) {
      arrayObject[key as keyof IotAcuRealtimeArrayObject].shift();
    } 
  }
}


function appendAcuDataToRealTimeArray(arrayObject: IotAcuRealtimeArrayObject, data: AcuData) {
  const arrayKeys = Object.keys(arrayObject);
  const dataKeys = Object.keys(data);

  arrayKeys.forEach((key, index) => {
    arrayObject[key as keyof IotAcuRealtimeArrayObject].push(data[dataKeys[index] as keyof AcuData]);
  });
}


function emitRealTimeArrays(io: Server, arrayObject: IotAcuRealtimeArrayObject) {
  const arrayKeys = Object.keys(arrayObject);
  const enumValues = Object.values(AcuSocketEventEmmiters);

  arrayKeys.forEach((key, index) => {
    io.emit(enumValues[index], arrayObject[key as keyof IotAcuRealtimeArrayObject]);
  });
}

export {preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays}
