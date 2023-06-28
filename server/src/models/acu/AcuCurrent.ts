import mongoose from "mongoose";

const Schema = mongoose.Schema;

const currentSchema = new Schema(
  {
    time: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  { toJSON: { getters: true } }
);

const AcuCurrent = mongoose.model("AcuCurrent", currentSchema, "current");
export default AcuCurrent;
