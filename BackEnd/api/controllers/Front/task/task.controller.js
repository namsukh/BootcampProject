const task = require("../../../models/task.model");
// const { param } = require("../../../routes/task.route");

exports.allTask=async (req, res) => {
    const {limit=10}=req.body;
    const page=req.params.page

    try{
        console.log("fghf)");
    const t = await task.find({userID:req.user.user_id}).limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await task.countDocuments({userID:req.user.user_id});

    res.json({task:t, totalPages: Math.ceil(count / limit),
    currentPage: page});
   
    
    }
    catch(err)
    {
        res.status(400).send("Error"+err.message);
    }
};