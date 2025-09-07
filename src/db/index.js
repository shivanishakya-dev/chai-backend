import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
}

export default connectDB
