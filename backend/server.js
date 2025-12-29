import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware

app.use(express.json());
app.use(cors());

// db Connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

// mongodb link
// mongodb+srv://harsh:5000harsh@cluster0.mz27n.mongodb.net/?
// https://cloud.mongodb.com/v2/66d065a4b36441022d1e4468#/security/network/accessList

// payment link
// https://dashboard.stripe.com/test/dashboard
