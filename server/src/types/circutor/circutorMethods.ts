import { DataPoint } from "../generic.js";
import { RecievedData, CircutorData, emptyCircutorData } from "./circutorTypes.js";


let time = 0;

function rawDataToRealData(raw: RecievedData): CircutorData {
  let realData: CircutorData = emptyCircutorData();
  let exponent: number;

  let rawKeys = Object.keys(raw);
  rawKeys.splice(0, 3);

  for (let i = 0; i < rawKeys.length; i++) {
    let data: DataPoint = {
      value: 0,
      time: 0,
    };

    if (i/3 < 1) {
      exponent = raw.VOLTAGE_UNITS.value;
    }
    else if (i/3 < 2) {
      exponent = raw.CURRENT_UNITS.value;
    }
    else if (i/3 < 3) {
      exponent = raw.ACTIVE_POWER_UNITS.value;
    }
    else {
      exponent = -3;
    }

    data.value = raw[rawKeys[i] as keyof RecievedData].value * Math.pow(10, exponent);
    data.time = time; 

    realData[rawKeys[i] as keyof CircutorData] = data;
  }

  time++
  return realData;
}

export { rawDataToRealData }
