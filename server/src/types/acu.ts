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

export { AcuData, Voltage, Current };
