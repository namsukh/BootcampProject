const task = require("../../../models/task.model");

exports.allTask=async (req, res) => {
    try{

    const t = await task.find({userID:req.user.user_id});
    res.json(t);
    
    }
    catch(err)
    {
        res.status(400).send("Error")
    }
};