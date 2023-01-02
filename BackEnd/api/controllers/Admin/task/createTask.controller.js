const task = require("../../../models/task.model");

exports.createTask=async (req, res) => {
    console.log(req.body.TaskName);
    const t = new task({
      TaskName: req.body.TaskName,
      Details: req.body.Details,
      Address: req.body.Address,
      Date: req.body.Date,
      Category: req.body.Category,
    });
    const newt = await t.save();
    res.status(201).json(newt);
 
  };