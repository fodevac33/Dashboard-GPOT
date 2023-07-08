
interface DataPoint {
  time: number;
  value: number;
}

interface CircutorRawDataPoint {
  value: number;
}

enum Topics {
  DC_DATA = "DC_DATA",
  CIRCUTOR = "CIRCUTOR", 
}

export {DataPoint, CircutorRawDataPoint, Topics}
