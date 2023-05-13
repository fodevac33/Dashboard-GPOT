// Types that model the data recieved from the ACU Energy

interface Voltage {
  time: number;
  voltage: number;
}

interface Current {
  time: number;
  current: number;
}

interface Power {
  time: number;
  power: number;
}

interface ImportedEnergy {
  time: number;
  imported: number;
}

interface ExportedEnergy {
  time: number;
  exported: number;
}

interface NetEnergy {
  time: number;
  net: number;
}

interface TotalEnergy {
  time: number;
  total: number;
}

interface Energies {
  imported: ImportedEnergy;
  exported: ExportedEnergy;
  net: NetEnergy;
  total: TotalEnergy;
}

interface AcuData {
  voltage: Voltage;
  current: Current;
  power: Power;
  energies: Energies;
}

interface IotAcuRealtimeArrayObject {
  arrayCurrentDataRealTime: Current[];
  arrayVoltageDataRealTime: Voltage[];
  arrayPowerDataRealTime: Power[];
  arrayImportedDataRealTime: ImportedEnergy[];
  arrayExportedDataRealTime: ExportedEnergy[];
  arrayNetDataRealTime: NetEnergy[];
  arrayTotalDataRealTime: TotalEnergy[];
}

enum Topics {
  DC_DATA = "DC_DATA",
}

export { AcuData, IotAcuRealtimeArrayObject, Topics };
