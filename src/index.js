// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is runing at port : 
    ${process.env.PORT}`);
  
})


















/*
import express from "express";
const app = express()(async () => {

  try {
    mongoose.connect(`${process.env.MONGOSDB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error
    });

    app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();
*/
