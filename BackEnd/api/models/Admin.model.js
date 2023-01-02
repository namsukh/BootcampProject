const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  
  email:{ type:String,unique: true},
  password:{ type:String,unique:true},
  token:{type:String},

});

module.exports=mongoose.model("Admin",Admin)