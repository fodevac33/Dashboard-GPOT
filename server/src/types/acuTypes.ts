// Types that model the data recieved from the ACU Energy

interface DataPoint {
  time: number;
  value: number;
}


interface AcuData {
  voltage: DataPoint;
  current: DataPoint;
  power: DataPoint;
  imported: DataPoint;
  exported: DataPoint;
  net: DataPoint;
  total: DataPoint;
}

interface IotAcuRealtimeArrayObject {
  arrayVoltageDataRealTime: DataPoint[];
  arrayCurrentDataRealTime: DataPoint[];
  arrayPowerDataRealTime: DataPoint[];
  arrayImportedDataRealTime: DataPoint[];
  arrayExportedDataRealTime: DataPoint[];
  arrayNetDataRealTime: DataPoint[];
  arrayTotalDataRealTime: DataPoint[];
}

enum SocketEventEmmiters {
  Voltage = "dataRealTimeVoltage",
  Current = "dataRealTimeCurrent",
  Power = "dataRealTimePower",
  ImportedEnergy = "dataRealTimeImportedEnergy",
  ExportedEnergy = "dataRealTimeExportedEnergy",
  NetEnergy = "dataRealTimeNetEnergy",
  TimeTotalEnergy = "dataRealTimeTotalEnergy"
}

enum Topics {
  DC_DATA = "DC_DATA",
}

export { AcuData, IotAcuRealtimeArrayObject, Topics, SocketEventEmmiters };
