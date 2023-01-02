const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");
exports.assignedWorker=async (req, res) => {
    const id = req.params.id;
    const t = await workerTask.find({ taskID: id });
    res.status(200).send(t);
  };