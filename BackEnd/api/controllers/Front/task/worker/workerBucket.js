const { populate } = require("../../../../models/task.model");
const worker = require("../../../../models/WorkerTask.model");

exports.workerBucket=async (req, res) => {
    const limit=10 ;
    const page=req.params.page
    try{

    const t = await worker.find({workerID:req.user.user_id}).populate({path:"taskID",populate:[{path:"userID"}]}).limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await worker.countDocuments({workerID:req.user.user_id})
    res.json({task:t, totalPages: Math.ceil(count / limit),
    currentPage: page});;

   
    
    }
    catch(err)
    {
        res.status(400).send("Error "+err.message)
    }
};