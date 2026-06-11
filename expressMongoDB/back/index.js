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

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", logger ,userRoute);
app.use("/products", logger, productRoute);


app.post("/addUser", (req, res) => {
      const user = new User({
            username: "gio",
            password: "gio123"
      })

      user.save();

      res.send("success");
});

app.post("/addProduct", async (req, res) => {

      try
      {
            const product = new Product({
            name: "Smart Watch",
            category: "Electronics",
            price: 100,
                                       })

      await product.save();
      res.send("product added")
      } catch (e) {
            res.status(400).send(error.message);
      }


      res.send("success");
});

app.listen(3000, () => {
      console.log("listening ar http://localhost:3000");
});