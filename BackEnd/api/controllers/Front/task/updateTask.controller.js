const getTask=require('../../../middlewares/getTask.middleware')
const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");
exports.updateTask= async (req, res) => {
    console.log("Patch");
    if (req.body.TaskName != null) {
      res.tsk.TaskName = req.body.TaskName;
    }
    if (req.body.status != null) {
      if(res.tsk.status=="Completed"){
        return res.status(400).send("Cannot Update")
      }
      res.tsk.status = req.body.status;
      if (res.tsk.status == "Pending") {
        const count = await workerTask.deleteOne({ taskID: res.tsk._id });
        console.log(count);
      }
      // if(  res.tsk.status=="Delete")
      // { const count=  await workerTask.deleteOne({taskID:res.tsk._id});
      // const count2 =await task.deleteOne({_id:res.tsk._id});
      //     res.send(count)
      //     console.log(count)
      // }
    }
    if (req.body.Category != null) {
      res.tsk.Category = req.body.Category;
    }
    if (req.body.Date != null) {
      res.tsk.Date = req.body.Date;
    }
    if (req.body.Details != null) {
      res.tsk.Details = req.body.Details;
    }
    if (req.body.Address != null) {
      res.tsk.Address = req.body.Address;
    }
    try {
      if(res.tsk.status=="Completed"){
        return res.status(400).json({message:"Task Status Can't be Changed"})
      }
      else{
        const updatedTask = await res.tsk.save(() => {
          res.json({ message: "Task Updated !" });
        });
      }
      
    } catch (err) {
      res.json({ message: err.message });
    }
  };