import { Router } from "express";
import jwt from "jsonwebtoken"

const router = Router();

router.post('/login', (req, res) => {

      const {username, password} = req.body;

      if(username == null || password == null){
            return res.status(400).send("credentials are not provided");
      }

      if(username !== user.username || password !== username.password){
            return res.status(400).send("credentials are wrong");
      }

      const token = jwt.sign({id: user.id, username: user.username}, "mysecret", {expiresIn: "1h",});

      res.json({token});
});

router.post("/register", (req, res) =>{
      const {username, password, displayName, role} = req.body;

      try{
            const user = new User({ username, password, displayName, role});
            await user.save();

            res.status(201).send("user added successfully")
      } catch(error){
            res.status(400).send("database error" + error.message);
      }
});

export default router;