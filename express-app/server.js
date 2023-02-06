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



//requests
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter)


// listen
app.listen(server_port, () => {
    console.log(`SERVER STARTED ON: '127.0.0.1:${server_port}'`);
});