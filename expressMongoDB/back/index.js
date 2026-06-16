import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "./db.js";
import {User} from "./models/users.js";
import {Product} from "./models/products.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import logger from "./middlewares/logger.js";
import authRoute from "./routes/authRoute.js";
import authMiddleware from "./middlewares/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use("/auth", authRoute);
app.use("/users", authMiddleware ,userRoute);
app.use("/products", authMiddleware, productRoute);


app.listen(3000, () => {
      console.log("listening ar http://localhost:3000");
});