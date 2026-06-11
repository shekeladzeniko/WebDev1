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

export default router;