import * as acuTypes from "./acuTypes.js";

function preventArrayDataOverflow(max_data: number, arrayObject: acuTypes.IotAcuRealtimeArrayObject) {
  for (const key in arrayObject) {
    if (arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject].length > max_data) {
      arrayObject[key as keyof acuTypes.IotAcuRealtimeArrayObject].shift();
    } 
  }
}


export {preventArrayDataOverflow}
