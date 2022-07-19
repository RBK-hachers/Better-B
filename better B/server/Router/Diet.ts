import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { DietModel } from "../database/diets";
const router = express.Router();
router.get("/api/diets", async (req:Request,res:Response)=>{
    const diet=DietModel.find({})
    return res.status(200).send(diet)
})
export {router as Dietrouter}