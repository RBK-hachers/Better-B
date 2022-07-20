import { WorkoutModel } from "../database/workout";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
const router=express.Router()
router.get("/api/workouts",async (req:Request,res:Response)=>{
    WorkoutModel.find({}).then()
})
