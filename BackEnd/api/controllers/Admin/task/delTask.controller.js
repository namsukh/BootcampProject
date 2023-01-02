const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");

exports.delTask=async (req, res) => {
    try {
       
        const id = req.params.id;
        console.log(id);
        const newt = await task.deleteOne({ _id: id });
        
        await workerTask.deleteOne({ taskID: id });
       
        if (newt.deletedCount === 1) {
          res.send("Successfully deleted one document.");
        } else {
          res.send("No documents matched the query. Deleted 0 documents.");
        }
      } catch(err) {
        console.log(err.message);
      }
};