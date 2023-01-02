
const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");

exports.updateTaskWorker= async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const newt = await WorkerTask.updateOne(
      { _id: id },
      { $set: { workerID: req.body.workerID } }
    );
    res.status(201).json(newt);
    
};