const { populate } = require("../../../../models/task.model");
const worker = require("../../../../models/WorkerTask.model");

exports.workerBucketPublic=async (req, res) => {
    const limit=5 ;
    
    const page=req.params.page
    try{
        console.log(req.body.userId)
    const t = await worker.find({workerID:req.body.userId}).populate({path:"taskID",populate:[{path:"userID"}]}).limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await worker.countDocuments({workerID:req.body.userId})
    res.json({task:t, totalPages: Math.ceil(count / limit),
    currentPage: page});

   
    
    }
    catch(err)
    {
        res.status(400).send("Error "+err.message)
    }
};