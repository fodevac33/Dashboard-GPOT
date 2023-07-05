// Types that model the data recieved from the ACU Energy
import { DataPoint } from "../generic.js";

interface AcuData {
  voltage: DataPoint;
  current: DataPoint;
  power: DataPoint;
  imported: DataPoint;
  exported: DataPoint;
  net: DataPoint;
  total: DataPoint;
}

interface IotAcuRealtimeArrays {
  arrayVoltage: DataPoint[];
  arrayCurrent: DataPoint[];
  arrayPower: DataPoint[];
  arrayImported: DataPoint[];
  arrayExported: DataPoint[];
  arrayNet: DataPoint[];
  arrayTotal: DataPoint[];
}

enum AcuSocketEventEmmiters {
  Voltage = "dataRealTimeVoltage",
  Current = "dataRealTimeCurrent",
  Power = "dataRealTimePower",
  ImportedEnergy = "dataRealTimeImportedEnergy",
  ExportedEnergy = "dataRealTimeExportedEnergy",
  NetEnergy = "dataRealTimeNetEnergy",
  TotalEnergy = "dataRealTimeTotalEnergy"
}


export { AcuData, IotAcuRealtimeArrays, AcuSocketEventEmmiters };
