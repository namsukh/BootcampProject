const express = require("express");
const router = express.Router();
 const controller = require('../../controllers/Front/task/task.controller');
const controllerCreate = require('../../controllers/Front/task/createTask.controller');
// const controllerDel = require('../controllers/Admin/task/delTask.controller');
// const updateTaskWorker=require('../controllers/Admin/task/updateTaskWorker.controller');
 const updateTask=require('../../controllers/Front/task/updateTask.controller');
 const getTask=require('../../middlewares/getTask.middleware')
 const verifyToken=require('../../../api/middlewares/verifyToken.middleware')
// const assignWorker=require('../controllers/Admin/task/assignWorker.controller')
 const assignedWorker=require('../../controllers/Front/task/assignedWorker.controller')
// const getTaskController=require('../controllers/Admin/task/getTask.controller')


router.route('/all').get(verifyToken.verifyToken,controller.allTask);
router.route('/createTask').post(verifyToken.verifyToken,controllerCreate.createTask);
// router.route("/:id").delete(controllerDel.delTask);
// router.route("/updateTaskWorker/:id").patch(updateTaskWorker.updateTaskWorker )
 router.route("/update/:id").patch(verifyToken.verifyToken,getTask.getTask,updateTask.updateTask);
// router.route("/AssignWorker/:id").post(getTask.getTask,assignWorker.assignWorker);

 router.route("/AssignedWorker/:id").get(verifyToken.verifyToken,getTask.getTask,assignedWorker.assignedWorker);
// router.route("/:id").get(getTask.getTask,getTaskController.getTask)
  
module.exports = router;