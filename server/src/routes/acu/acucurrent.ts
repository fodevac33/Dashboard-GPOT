import express from "express";
import AcuCurrent from "../../models/acu/AcuCurrent.js"; 

const router = express.Router();

router.get("/acucurrents", async (req, res) => {
  try {
    const AcuCurrents = await AcuCurrent.find();
    res.status(200).json(AcuCurrents);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({ mesage: error.message });
    }
  }
});

export default router;
