import { IotAcuRealtimeArrays, AcuSocketEventEmmiters, AcuData} from "./acuTypes.js";
import { Server } from "socket.io";

function preventArrayDataOverflow(max_data: number, arrayObject: IotAcuRealtimeArrays) {
  for (const key in arrayObject) {
    if (arrayObject[key as keyof IotAcuRealtimeArrays].length > max_data) {
      arrayObject[key as keyof IotAcuRealtimeArrays].shift();
    } 
  }
}


function appendAcuDataToRealTimeArray(arrayObject: IotAcuRealtimeArrays, data: AcuData) {
  const arrayKeys = Object.keys(arrayObject);
  const dataKeys = Object.keys(data);

  arrayKeys.forEach((key, index) => {
    arrayObject[key as keyof IotAcuRealtimeArrays].push(data[dataKeys[index] as keyof AcuData]);
  });
}


function emitRealTimeArrays(io: Server, arrayObject: IotAcuRealtimeArrays) {
  const arrayKeys = Object.keys(arrayObject);
  const enumValues = Object.values(AcuSocketEventEmmiters);

  arrayKeys.forEach((key, index) => {
    io.emit(enumValues[index], arrayObject[key as keyof IotAcuRealtimeArrays]);
  });
}

export {preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays}
