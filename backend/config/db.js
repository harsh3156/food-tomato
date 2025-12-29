import mongoose from "mongoose";
  
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://smit:5000Smit@cluster0.mz27n.mongodb.net/food-website"
    )
    .then(() => console.log("DB Connected"));
};
