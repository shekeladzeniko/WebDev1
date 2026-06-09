import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "./db.js";
import {User} from "./models/users.js";
import {Product} from "./models/products.js";
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"

const app = express();

app.use(cors());


app.post("/addUser", (req, res) => {
      const user = new User({
            username: "gio",
            password: "gio123"
      })

      user.save();

      res.send("success");
})

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
})

app.listen(3000, () => {
      console.log("listening ar http://localhost:3000");
});