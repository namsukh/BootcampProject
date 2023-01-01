const express= require("express")
const router =express.Router()
const task=require("./schema")
const workerTask = require("./workerTask")
const WorkerTask=require("./workerTask")

router.get('/all',async(req,res)=>{

    const t= await task.find();
    res.json(t);

})
router.get('/TasksAssginedWorker/:id',getTask,async(req,res)=>{

    const id=req.params.id
    const t= await workerTask.find({taskID:id});
    res.status(200).send(t);

})
router.get('/:id',getTask,(req,res)=>{

    
    res.send(res.tsk)
})


router.post('/',async(req,res)=>{

    console.log(req.body.TaskName)
    const t= new task({
        TaskName:req.body.TaskName,
        Details:req.body.Details,
        Address:req.body.Address,
        Date:req.body.Date,
        Category:req.body.Category,
        
    });
    const newt= await t.save()
    res.status(201).json(newt)
    //const t= await task.find();

})
router.post('/AssignWorker/:id',getTask,async(req,res)=>{

    try{
    const t= new WorkerTask({
        
        taskID:req.body.taskID,
        workerID:req.body.workerID,
        
    });
    const newt= await t.save()
    res.tsk.status="Processing";
    const updatedTask=  await res.tsk.save(()=>{
      //  res.json({message:"Task Updated !"});
       res.status(201).json(newt)
    })
    }
        catch(err){
    res.json({message:err.message})

    }
   
    //const t= await task.find();

})
router.patch('/UpdateTaskWorker/:id',async(req,res)=>{

    const id= req.params.id;
    console.log(id);
    const newt= await WorkerTask.updateOne({_id:id},{$set:{workerID:req.body.workerID}})
    res.status(201).json(newt)
    //const t= await task.find();

})
router.delete('/DeleteAssignWorker/:id',async(req,res)=>{

    try{
   
    const id =req.params.id
  
    const count=  await workerTask.deleteOne({taskID:id});
   
    if (count.deletedCount === 1) {
        
        res.send("Successfully deleted one document.");
      } else {
        res.send("No documents matched the query. Deleted 0 documents.");
      }
    }
    catch(err) {
        console.log(err.message)
   
    }
    
})
router.delete('/:id',async(req,res)=>{

    try{
   // console.log(req.body.TaskName)
    const id =req.params.id
    console.log(id);
    const newt=  await task.deleteOne({_id:id});
    await workerTask.deleteOne({taskID:id});
    //const t= await task.find();
    if (newt.deletedCount === 1) {
        
        res.send("Successfully deleted one document.");
      } else {
        res.send("No documents matched the query. Deleted 0 documents.");
      }
    }
    finally {
    //  await client.close();
    }
    
})

router.patch('/update/:id',getTask, async (req,res)=>{

    console.log("Patch")
    if(req.body.TaskName!=null)
    {
        res.tsk.TaskName=req.body.TaskName;
    }
    if(req.body.status!=null)
    {
        res.tsk.status=req.body.status;
        if(  res.tsk.status=="Pending")
        { const count=  await workerTask.deleteOne({taskID:res.tsk._id});
            console.log(count)
        }
        // if(  res.tsk.status=="Delete")
        // { const count=  await workerTask.deleteOne({taskID:res.tsk._id});
        // const count2 =await task.deleteOne({_id:res.tsk._id});
        //     res.send(count)
        //     console.log(count)
        // }
    }
    if(req.body.Category!=null)
    {
        res.tsk.Category=req.body.Category;
    }
    if(req.body.Date!=null)
    {
        res.tsk.Date=req.body.Date;
    }
    if(req.body.Details!=null)
    {
        res.tsk.Details=req.body.Details;
    }
    if(req.body.Address!=null)
    {
        res.tsk.Address=req.body.Address;
    }
    try{
        const updatedTask=  await res.tsk.save(()=>{
            res.json({message:"Task Updated !"});
        })
        
    }
    catch(err){
        res.json({message:err.message})

    }
})


async function  getTask(req,res,next)
{
    let tsk
    try{
         tsk= await task.findById(req.params.id)
      if(tsk==null)
      {
        return res.status(404).json({message:"Task dosen't  exist"})
      }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.tsk=tsk;
    next();
}
module.exports =router;
