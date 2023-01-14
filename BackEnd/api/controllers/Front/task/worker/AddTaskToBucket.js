const task = require("../../../../models/task.model");
const workerTask = require("../../../../models/WorkerTask.model");
const userModel = require("../../../../models/User.model");

exports.AddTaskToBucket= async (req, res) => {
    try {
      const t = new workerTask({
        taskID: req.body.taskID,
        workerID:req.user.user_id 
        
      });
      const user = await userModel.findById(req.user.user_id)
     if(user.type=="User"){
      return res.status(400).send("Signin with Worker Profile");
     }
      const newt = await t.save();
      res.tsk.status = "Processing";
      const updatedTask = await res.tsk.save(() => {
        res.status(201).json(newt);
      });
    } catch (err) {
        console.log(err.message);
      res.status(400).json({ message: err.message });
    }
  
};