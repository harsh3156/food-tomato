import mongoose from "mongoose";
export const connectDB = async () => {
  try {

    //console.log("MONG_ URI: ",process.env.MONGO_URL);
    
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};



//mongodb+srv://smit:5000Smit@cluster0.mz27n.mongodb.net/food-websitegit 