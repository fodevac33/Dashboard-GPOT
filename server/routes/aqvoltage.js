import  express from "express";
import AQVoltage from "../models/AQVoltage.js";

const router = express.Router();

router.get("/aqvoltages", async(req,res) =>{
    try {
        const AQVoltages = await AQVoltage.find();
        res.status(200).json(AQVoltages);
        
    } catch (error) {
        res.status(404).json({mesage: error.message})
    }
});

export default router;