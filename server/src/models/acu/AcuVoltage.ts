import mongoose from "mongoose";

const Schema = mongoose.Schema;

const voltageSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { toJSON: { getters: true } }
);

const AcuVoltage = mongoose.model("AcuVoltage", voltageSchema, "voltage");
export default AcuVoltage;
