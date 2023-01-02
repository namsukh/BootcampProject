const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");

exports.assignWorker= async (req, res) => {
    try {
      const t = new workerTask({
        taskID: req.body.taskID,
        workerID: req.body.workerID,
      });
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