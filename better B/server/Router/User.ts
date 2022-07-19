import express, { Request, Response } from "express";
import { UserModel } from "../database/user";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const router = express.Router();

// get all users
router.get("/api/user", async (req: Request, res: Response) => {
  const user = await UserModel.find({});
  return res.send(user);
});
export {router as userRouter}