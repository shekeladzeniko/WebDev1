import express from "express";

const app = express();

const users = ["saba", "niko", "gio", "luka"];

app.get("/users", (req, res) => {
      req.send(users);
});

app.get("/users/:id", (req, res) => {
      res.send(users[req.params.id]);
});

app.listen(3000,() => {
      console.log('app is listening ar http://localhost:3000');
});
