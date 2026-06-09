import express from "express";
import { User } from "../models/users.js"

const router = express.Router();

router.post("/", (req, res) => {
      const user = new User({
            username: "gio",
            password: "gio123"
      })

      user.save();

      res.send("success");
});

router.get("/", async (req, res) =>{
      try{
            const users = await User.find();
            res.send(users);
      } catch (error) {}
});

export default router;