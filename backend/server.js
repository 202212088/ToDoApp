const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/ToDoRoutes');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(cors())

mongoose
    .connect("mongodb+srv://aakash:aakash@cluster0.shxu1w8.mongodb.net/")
    .then(() => {console.log("Connected")})
    .catch((err) => {console.log(err)})
app.use(routes)

app.listen(PORT,() => {
    console.log(`server listening on ${PORT}`);
})