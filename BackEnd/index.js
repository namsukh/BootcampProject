const { port } = require('./config/vars');
const jwt = require('jsonwebtoken');

const mongoose = require('./config/mongoose');
const db=mongoose.connect();

const app = require('./config/express');

app.listen(port,()=>{
    console.log("Server started ");
   
})