interface Voltage {
  time: number;
  voltage: number;
}

interface Current {
  time: number;
  current: number;
}

interface AcuData {
  voltage: Voltage;
  current: Current;
}

interface Energy {
  time: number;
  imported: number;
  exported: number;
  net: number;
  total: number;
}

enum Topics {
  DC_DATA = "DC_DATA",
}

export { AcuData, Voltage, Current, Energy, Topics };
