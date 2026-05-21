const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

app.use(express.json());

const mongo_url = "mongodb+srv://niko:nikoniko@cluster0.p0jmzf3.mongodb.net/";

mongoose.connect(mongo_url)
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.error('error connecting to MongoDB', err));

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        default:"Tbilisi"
    },
    createdAT:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("user", userSchema)

app.get("/", (req,res) => {
    res.send("welcome");
});

app.post("/api/users", async (req,res) => {
    const { name, age, city } = req.body

    const user = new User({
        name, age, city
    })

    const newuser = await user.save()

    res.status(201).json({message: "succesfuly added user", user: newuser})
})

app.get("/api/users", async (req, res) => {
    const users = await User.find()

    res.json({
        count: users.length,
        data: users
    })
})

app.listen(PORT, () => {
    console.log('app is on http:localhost:' + PORT);
})