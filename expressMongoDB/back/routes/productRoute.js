import express from "express";
import { Product } from "../models/products.js"

const router = express.Router();


router.post("/postproduct", async (req, res) => {

      try
      {
            const product = new Product({
            name: "Smart Watch",
            category: "Electronics",
            price: 100,
                                       })

      await product.save();
      res.send("product added")
      } catch (error) {
            res.status(400).send(error.message);
      }


      res.send("success");
})

router.get("/getproduct", async (req, res) =>{
      try{
            const products = await Product.find({
                  category: "Electronics"
            });

            res.send(products);
      } catch (error) {
            res.status(400).send(error.message);
      }
});

router.put("/putProduct", async (req, res) => {
       try{
            const updatedProduct = await Product.findOneAndUpdate(
                  {
                        name: "Smart Watch"
                  },
                  {
                        price: 150
                  },
                  {
                        new: true
                  }
      );
            
            res.send(updatedProduct);
      } catch (error) {
            res.status(400).send(error.message);
      }

})

router.delete("/deleteProduct", async (req, res) => {
       try{
            const deletedProduct = await Product.findOneAndDelete({
                  name: "Smart Watch"
            });

            res.send("Product deleted successfully");
      } catch (error) {
            res.status(400).send(error.message);
      }

})

export default router;