import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "./db.js";

const app = express();

app.use(cors());

app.listen(3000, () => {
      console.log("listening ar http://localhost:3000");
});