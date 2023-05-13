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
    arrayObject.arrayCurrentDataRealTime.push(data.current);
    arrayObject.arrayVoltageDataRealTime.push(data.voltage);
    arrayObject.arrayPowerDataRealTime.push(data.power);
    arrayObject.arrayImportedDataRealTime.push(data.energies.imported);
    arrayObject.arrayExportedDataRealTime.push(data.energies.exported);
    arrayObject.arrayNetDataRealTime.push(data.energies.net);
    arrayObject.arrayTotalDataRealTime.push(data.energies.total);
}

function emitRealTimeArrays(io: Server, arrayObject: acuTypes.IotAcuRealtimeArrayObject) {
    io.emit("dataRealTimeVoltage", arrayObject.arrayVoltageDataRealTime);
    io.emit("dataRealTimeCurrent", arrayObject.arrayCurrentDataRealTime);
    io.emit("dataRealTimePower", arrayObject.arrayPowerDataRealTime);
    io.emit("dataRealTimeImportedEnergy", arrayObject.arrayImportedDataRealTime);
    io.emit("dataRealTimeExportedEnergy", arrayObject.arrayExportedDataRealTime);
    io.emit("dataRealTimeNetEnergy", arrayObject.arrayNetDataRealTime);
    io.emit("dataRealTimeTotalEnergy", arrayObject.arrayTotalDataRealTime);
}

export {preventArrayDataOverflow, appendAcuDataToRealTimeArray, emitRealTimeArrays}
