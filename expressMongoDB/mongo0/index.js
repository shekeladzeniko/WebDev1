const express = require("express");
const mongoose = require('mongoose');

//mongodb+srv://niko:nikoniko@cluster0.p0jmzf3.mongodb.net/

const app = express()
const PORT = 8080;

app.use(express.json());

const mongo_url = 'mongodb+srv://niko:nikoniko@cluster0.p0jmzf3.mongodb.net/';

mongoose.connect(mongo_url)
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.error('error connecting to MongoDB', err));

app.get('/', (req, res) => {
      res.send('hello world')
});

app.listen(PORT, () => {
      console.log('server is listening on port ' + PORT);
})