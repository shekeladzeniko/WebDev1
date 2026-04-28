import express from "express";

const app = express();

const users = ["saba", "niko", "gio", "luka"];

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

app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
