import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://221701503:221701503@food-delivery.i7wb3.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery').then(()=>console.log("DBconnected"));
}