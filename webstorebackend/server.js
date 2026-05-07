import express from "express";

const app = express();
app.use(express.json());

const users = [
      {name: "niko", password: "niko123"},
      {name: "gio",  password: "gio123"},
      {name: "luka", password: "luka123"},
      {name: "deme", password: "deme123"},
];

const products = [
      {id: 1, name: "mouse", price: 30},
      {id: 2, name: "keyboard", price: 50},
      {id: 3, name: "monitor", price: 100},
      {id: 4, name: "camera", price: 40},
];

const videos = ["video1", "video2", "video3"];

app.get("/videos/:id", (req, res) => {
      console.log(req.params.id);
      const parsedid = parseInt(req.params.id);
      res.status(200).send(videos[parsedid]);
})


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


app.post("/addproduct", (req, res) => {
      const newproduct = req.body;
      newproduct.id = products.length + 1;
      products.push(newproduct);

      return res.status(201).send("Product added");
})

app.post("/login", (req, res) => {
      const founduser = users.find((user) => {
    return (
      user.name === req.body.name && user.password === req.body.password
    );
  });

  if (!founduser) {
    return res.status(401).send("user doesn't exist");
  }

  return res.status(200).send("you are logged in");
})



app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
