const getTask=require('../../../middlewares/getTask.middleware')
const task = require("../../../models/task.model");
const workerTask = require("../../../models/WorkerTask.model");
exports.updateUser= async (req, res) => {
    console.log("Patch");
    if (req.body.name != null) {
      res.user.name = req.body.name;
    }
    if (req.body.phone != null) {
    
        res.user.phone = req.body.phone;
    }
    if (req.body.category != null) {
    
      res.user.category = req.body.category;
  }
  if (req.body.cnic != null) {
    
    res.user.cnic = req.body.cnic;
}

    try {
     
      
        const updatedUser = await res.user.save(() => {
          res.json({ message: "User Profile Updated !" });
        });
      
      
    } catch (err) {
      res.json({ message: err.message });
    }
  };