require("dotenv").config();
var express= require("express")

var mongoose =require("mongoose")
var app=express();
var cors =require('cors')
mongoose.connect("mongodb://"+process.env.urlDatabse)

const db=mongoose.connection
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json())
//app.use(express.params)
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin:"*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
db.once('open',()=>console.log("Connected to data base"))
app.get('/a',(req,res)=>{

    res.send("HI Welkom");
})
const task=require("./routes/task")
app.use('/task',task);

app.listen(3000,()=>{
    console.log("Server started ");
 
})