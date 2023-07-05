import { CircutorRawDataPoint, DataPoint } from "../generic.js"

interface RecievedData {
  VOLTAGE_UNITS: CircutorRawDataPoint,
  CURRENT_UNITS: CircutorRawDataPoint,
  ACTIVE_POWER_UNITS: CircutorRawDataPoint,

  L1_VOLTAGE: CircutorRawDataPoint,
  L2_VOLTAGE: CircutorRawDataPoint,
  L3_VOLTAGE: CircutorRawDataPoint,

  L1_CURRENT: CircutorRawDataPoint,
  L2_CURRENT: CircutorRawDataPoint,
  L3_CURRENT: CircutorRawDataPoint,

  L1_ACTIVE_POWER: CircutorRawDataPoint,
  L2_ACTIVE_POWER: CircutorRawDataPoint,
  L3_ACTIVE_POWER: CircutorRawDataPoint,

  ANGLE_V1_V2: CircutorRawDataPoint;
  ANGLE_V2_V3: CircutorRawDataPoint;
  ANGLE_V3_V1: CircutorRawDataPoint;
}

interface CircutorData {
  L1_VOLTAGE: DataPoint,
  L2_VOLTAGE: DataPoint,
  L3_VOLTAGE: DataPoint,

  L1_CURRENT: DataPoint,
  L2_CURRENT: DataPoint,
  L3_CURRENT: DataPoint,

  L1_ACTIVE_POWER: DataPoint,
  L2_ACTIVE_POWER: DataPoint,
  L3_ACTIVE_POWER: DataPoint,

  ANGLE_V1_V2: DataPoint,
  ANGLE_V2_V3: DataPoint,
  ANGLE_V3_V1: DataPoint,
}

function emptyCircutorData(): CircutorData {
  const emptyDataPoint: DataPoint = {
    value: 0,
    time: 0,
  }

  return {
    L1_VOLTAGE: emptyDataPoint,
    L2_VOLTAGE: emptyDataPoint,
    L3_VOLTAGE: emptyDataPoint,

    L1_CURRENT: emptyDataPoint,
    L2_CURRENT: emptyDataPoint,
    L3_CURRENT: emptyDataPoint,

    L1_ACTIVE_POWER: emptyDataPoint,
    L2_ACTIVE_POWER: emptyDataPoint,
    L3_ACTIVE_POWER: emptyDataPoint,

    ANGLE_V1_V2: emptyDataPoint,
    ANGLE_V2_V3: emptyDataPoint,
    ANGLE_V3_V1: emptyDataPoint,
  }
}

interface IotCircutorRealtimeArrays {
  arrayL1_VOLTAGE: DataPoint[],
  arrayL2_VOLTAGE: DataPoint[],
  arrayL3_VOLTAGE: DataPoint[],

  arrayL1_CURRENT: DataPoint[],
  arrayL2_CURRENT: DataPoint[],
  arrayL3_CURRENT: DataPoint[],

  arrayL1_ACTIVE_POWER: DataPoint[],
  arrayL2_ACTIVE_POWER: DataPoint[],
  arrayL3_ACTIVE_POWER: DataPoint[],

  arrayANGLE_V1_V2: DataPoint[],
  arrayANGLE_V2_V3: DataPoint[],
  arrayANGLE_V3_V1: DataPoint[],
}

enum CircutorSocketEventEmitters {
  L1_VOLTAGE = "dataRealTimeVoltageL1",
  L2_VOLTAGE = "dataRealTimeVoltageL2",
  L3_VOLTAGE = "dataRealTimeVoltageL3",

  L1_CURRENT = "dataRealTimeCurrentL1",
  L2_CURRENT = "dataRealTimeCurrentL2",
  L3_CURRENT = "dataRealTimeCurrentL3",

  L1_ACTIVE_POWER = "dataRealTimeActivePowerL1",
  L2_ACTIVE_POWER = "dataRealTimeActivePowerL2",
  L3_ACTIVE_POWER = "dataRealTimeActivePowerL3",

  ANGLE_V1_V2 = "dataRealTimePhasors1",
  ANGLE_V2_V3 = "dataRealTimePhasors2",
  ANGLE_V3_V1 = "dataRealTimePhasors3",
}

export { RecievedData, CircutorData, IotCircutorRealtimeArrays, CircutorSocketEventEmitters, emptyCircutorData }

