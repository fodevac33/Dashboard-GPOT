import * as acuTypes from "./acuTypes.js";
import { Server } from "socket.io";

function preventArrayDataOverflow(max_data: number, arrayObject: acuTypes.IotAcuRealtimeArrayObject) {
  for (const key in arrayObject) {
    if (arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject].length > max_data) {
      arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject].shift();
    } 
  }
}


function appendAcuDataToRealTimeArray(arrayObject: acuTypes.IotAcuRealtimeArrayObject, data: acuTypes.AcuData) {
  const arrayKeys = Object.keys(arrayObject);
  const dataKeys = Object.keys(data);

  arrayKeys.forEach((key, index) => {
    arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject].push(data[dataKeys[index] as keyof acuTypes.AcuData]);
  });
}


function emitRealTimeArrays(io: Server, arrayObject: acuTypes.IotAcuRealtimeArrayObject) {
  const arrayKeys = Object.keys(arrayObject);
  const enumValues = Object.values(acuTypes.SocketEventEmmiters);

  arrayKeys.forEach((key, index) => {
    io.emit(enumValues[index], arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject]);
  });
}

export {preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays}
