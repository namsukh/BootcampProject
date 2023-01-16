const express = require("express");
const router = express.Router();
 const controller = require('../../controllers/Front/task/task.controller');
 const workerBucket = require('../../controllers/Front/task/worker/workerBucket');
 const workerBucketPublic=require('../../controllers/Front/task/worker/workerBucketPublic')

const controllerCreate = require('../../controllers/Front/task/createTask.controller');
// const controllerDel = require('../controllers/Admin/task/delTask.controller');
// const updateTaskWorker=require('../controllers/Admin/task/updateTaskWorker.controller');
 const updateTask=require('../../controllers/Front/task/updateTask.controller');
 const getTask=require('../../middlewares/getTask.middleware')
 const getUser=require('../../middlewares/getUser.middleware')
 const verifyToken=require('../../../api/middlewares/verifyToken.middleware')
 const AddTaskToBucket=require('../../controllers/Front/task/worker/AddTaskToBucket')
 const assignedWorker=require('../../controllers/Front/task/assignedWorker.controller')
 const getTaskController=require('../../controllers/Front/task/getTask.controller')
 const findTask=require('../../controllers/Front/task/worker/findTask.controller')
const updateUser=require("../../controllers/Front/task/updateUser")
router.route('/all/:page').get(verifyToken.verifyToken,controller.allTask);
router.route('/workerBucket/:page').get(verifyToken.verifyToken,workerBucket.workerBucket);
router.route('/findTask').post(verifyToken.verifyToken,findTask.findTask);
router.route('/workerBucketPublic/:page').post(workerBucketPublic.workerBucketPublic);

router.route('/createTask').post(verifyToken.verifyToken,controllerCreate.createTask);
// router.route("/:id").delete(controllerDel.delTask);
// router.route("/updateTaskWorker/:id").patch(updateTaskWorker.updateTaskWorker )
 router.route("/update/:id").patch(verifyToken.verifyToken,getTask.getTask,updateTask.updateTask);

 router.route("/AddTaskToBucket/:id").post(verifyToken.verifyToken,getTask.getTask,AddTaskToBucket.AddTaskToBucket);

 router.route("/AssignedWorker/:id").get(verifyToken.verifyToken,getTask.getTask,assignedWorker.assignedWorker);
 router.route("/:id").get(getTask.getTask,getTaskController.getTask)
  
module.exports = router;