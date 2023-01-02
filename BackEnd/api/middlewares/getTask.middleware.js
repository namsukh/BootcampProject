const task = require("../models/task.model");
const workerTask = require("../models/WorkerTask.model");
exports.getTask=async(req, res, next) =>{
    let tsk;
    try {
      tsk = await task.findById(req.params.id);
      if (tsk == null) {
        return res.status(404).json({ message: "Task dosen't  exist" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.tsk = tsk;
    next();
}