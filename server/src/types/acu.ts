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

enum Topics {
  DC_DATA = "DC_DATA",
}

export { AcuData, Voltage, Current, Topics };
