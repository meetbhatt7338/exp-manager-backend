const express = require('express')
const app = express();
const mongoose = require('mongoose')


//database connection part
mongoose.connect('mongodb://127.0.0.1:27017/exp_manager').then(() => {
    console.log('Database connected');
}).catch((err) =>
    console.log('Error at database connection', err))


//server part
const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`);
})