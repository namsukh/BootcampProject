const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  
  taskID:{ type:mongoose.SchemaTypes.ObjectId,ref: "Task" ,unique: true},
  workerID:{ type:mongoose.SchemaTypes.ObjectId,ref: "Users"},

});

module.exports=mongoose.model("WorkerTask",TaskSchema)