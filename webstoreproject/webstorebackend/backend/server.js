import express from "express";

const app = express();
app.use(express.json());


const products = [
      {id: 1, category:"Electronics", name: "Smart Watch", price: 200},
      {id: 2, category:"Electronics", name: "Camera", price: 300},
      {id: 3, category:"Home", name: "White Pillow", price: 20},
      {id: 4, category:"Clothing", name: "Black Hoodie", price: 40},
];

app.get("/products", (req, res) => {
      res.send(products);
})

app.get("/products/:id", (req, res) => {
      console.log(req.params.id);
      const parsedid = parseInt(req.params.id);

      if(isNaN(parsedid)){
            return res.status(400).send("value should be number");
      }else if(parsedid >= products.length){
            return res.status(400).send("value should be smaller");
      }

      res.status(200).send(products[parsedid]);
})


app.post("/addproduct", (req, res) => {
      const newproduct = req.body;
      newproduct.id = products.length + 1;
      products.push(newproduct);

      return res.status(201).send("Product added");
})


app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
