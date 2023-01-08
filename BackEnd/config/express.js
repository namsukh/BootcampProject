var express= require("express")
var app=express();
var cors =require('cors')
const bodyParser = require('body-parser');

const mongoose = require('./mongoose');
const db=mongoose.connect();

app.use(bodyParser.json());
app.use(express.json())


app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin:"*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
db.once('open',()=>console.log("Connected to data base"))
app.get('/a',(req,res)=>{

    res.send("HI Welkom");
})
const admin=require("../api/routes/Admin")
const user=require('../api/routes/Front/user')
app.use('/admin',admin);
app.use('/user',user);


module.exports = app;
