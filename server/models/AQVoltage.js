import mongoose from "mongoose";


const Schema = mongoose.Schema;

const voltageSchema = new Schema(
  {
    time: {
      type: Number,
      required: true
    },
    voltage: {
      type: Number,
      required: true
    }
  },
  { toJSON: { getters: true } }
);


const AQVoltage = mongoose.model("AQ", voltageSchema,"voltage");
export default AQVoltage