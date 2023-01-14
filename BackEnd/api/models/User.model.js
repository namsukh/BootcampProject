const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name:{type:String,required:true},
  phone:{type:String,required:true,default:"N/A"},
  email:{ type:String,unique: true,required:true},
  password:{ type:String,required:true},
  type:{type:String,enum:["User","Worker"],required:true},
  token:{type:String},
  cnic:{type:String},
  category:{type:String}
  

});

module.exports=mongoose.model("User",user)