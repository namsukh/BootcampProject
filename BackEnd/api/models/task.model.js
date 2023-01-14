const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  TaskName: {
    type: String,
    required: true,
  },
  Details: { type: String, required: true },
  Address: {
    type: String,
    requires: true,
  },
  Date: { type: Date
,required:true },
  Category: {type: String,required :true , enum:["Plumber","Electrician","General"]},
  status: {type:String, enum:["Pending","Processing","Completed","Cancelled"] , default:"Pending"},
  userID:{ type:mongoose.SchemaTypes.ObjectId,required:true,ref: "User"},
  Rating:{type:Number}
});

module.exports=mongoose.model("Task",TaskSchema)