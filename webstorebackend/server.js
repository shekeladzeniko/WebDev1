import express from "express";

const app = express();

const users = ["saba", "niko", "gio", "luka"];

app.get("/users", (req, res) => {
      req.send(users);
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

app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
