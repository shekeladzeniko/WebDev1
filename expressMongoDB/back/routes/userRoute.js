import express from "express";
import { User } from "../models/users.js"

const router = express.Router();

router.post("/postuser", (req, res) => {
      try{
            const user = new User({
            username: "gio",
            password: "gio123"
      })

       user.save();
      res.send("success");
      
      } catch(error){
            res.status(400).send(error.message);
      }
});


router.get("/getuser", async (req, res) =>{
      try{
            const users = await User.find({
                  name: "gio"
            });

            res.send(users);
      } catch (error) {
            res.status(400).send(error.message);
      }
});


router.put("/putuser", async (req, res) => {
       try{
            const users = await User.findOneAndUpdate(
                  {
                        name: "gio"
                  },
                  {
                        password: "giogio"
                  },
                  {
                        new: true
                  }
            );

            res.send(users);
      } catch (error) {
            res.status(400).send(error.message);
      }

})

router.delete("/deleteuser", async (req, res) => {
       try{
            const deletedUser = await User.findOneAndDelete({
                  name: "gio"
            });

            res.send("User deleted successfully");
      } catch (error) {
            res.status(400).send(error.message);
      }

})

export default router;