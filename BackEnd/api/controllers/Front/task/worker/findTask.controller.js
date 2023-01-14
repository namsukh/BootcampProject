const task = require("../../../../models/task.model");

exports.findTask=async (req, res) => {
    const {limit=10,page=1}=req.body;
    //const page=req.params.page
    try{
    const cat=req.body.category;
    console.log("Find  and categpry is "+cat)
    const t = await task.find({status:"Pending",Category:cat}).limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();
    const count = await task.countDocuments({status:"Pending",Category:cat})
    res.json({task:t, totalPages: Math.ceil(count / limit),
    currentPage: page});
    
    }
    catch(err)
    {
        res.status(400).send("Error "+err.message)
    }
};