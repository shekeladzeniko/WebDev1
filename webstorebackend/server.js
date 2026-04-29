import express from "express";

const app = express();

const users = ["saba", "niko", "gio", "luka"];

const products = [
      {id: 1, name: "mouse", price: 30},
      {id: 2, name: "keyboard", price: 50},
      {id: 3, name: "monitor", price: 100},
      {id: 4, name: "camera", price: 40},
]



app.get("/users", (req, res) => {
      res.send(users);
});

app.get("/users/:id", (req, res) => {
      console.log(req.params.id);
      const parsedid = parseInt(req.params.id);

      if(isNaN(parsedid)){
            return res.status(400).send("value should be number");
      }else if(parsedid >= users.length){
            return res.status(400).send("value should be smaller");
      }

      res.status(200).send(users[parsedid]);
});

app.post("/users", (req, res) => {
      console.log(req.body);
      res.send("welcome to the post method");
});



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



app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
