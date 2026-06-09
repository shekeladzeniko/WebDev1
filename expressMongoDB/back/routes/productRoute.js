import express from "express";
import { Product } from "../models/products.js"

const router = express.Router();


router.post("/", async (req, res) => {

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

router.get("/getProduct", (req, res) => {

   
})

router.put("/putProduct", async (req, res) => {

})

router.delete("/deleteProduct", async (req, res) => {

})

export default router;