// imports
const express = require('express');
const mongoose = require('mongoose');


// app
const app = express();
const server_port = 3000;
app.use(express.json());


// mongo
mongoose.connect('mongodb://127.0.0.1:27017/StudentsCSD', {});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB local database'));

// https://www.youtube.com/watch?v=fgTGADljAeg
// 6:52

//requests
const studentsRouter = re

// listen
app.listen(server_port, () => {
    console.log(`SERVER STARTED ON: '127.0.0.1:${server_port}'`);
});