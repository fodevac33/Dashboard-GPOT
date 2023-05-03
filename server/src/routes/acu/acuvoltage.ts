import express from "express";
import AcuVoltage from "../../models/acu/AcuVoltage.js";

const router = express.Router();

router.get("/acuvoltages", async (req, res) => {
  try {
    const AcuVoltages = await AcuVoltage.find();
    res.status(200).json(AcuVoltages);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ mesage: error.message });
    }
  }
});

export default router;
