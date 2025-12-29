import express from "express";
import {
  loginUser,
  registerUser,
  getAllUsers,
  removeUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", getAllUsers);
userRouter.post("/remove", removeUser);

export default userRouter;
