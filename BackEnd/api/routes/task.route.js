const express = require("express");
const router = express.Router();
const controller = require('../controllers/Admin/task/task.controller');
const controllerCreate = require('../controllers/Admin/task/createTask.controller');
const controllerDel = require('../controllers/Admin/task/delTask.controller');
const updateTaskWorker=require('../controllers/Admin/task/updateTaskWorker.controller');
const updateTask=require('../controllers/Admin/task/updateTask.controller');
const getTask=require('../middlewares/getTask.middleware')
const verifyToken=require('../middlewares/getTask.middleware')
const assignWorker=require('../controllers/Admin/task/assignWorker.controller')
const assignedWorker=require('../controllers/Admin/task/assignedWorker.controller')
const getTaskController=require('../controllers/Admin/task/getTask.controller')


router.route('/allTask').get(controller.allTask);
router.route('/View').get(controller.allTask);
router.route('/createTask').post(controllerCreate.createTask);
router.route("/:id").delete(controllerDel.delTask);
router.route("/updateTaskWorker/:id").patch(updateTaskWorker.updateTaskWorker )
router.route("/update/:id").patch(getTask.getTask,updateTask.updateTask);
router.route("/AssignWorker/:id").post(getTask.getTask,assignWorker.assignWorker);

router.route("/AssignedWorker/:id").get(getTask.getTask,assignedWorker.assignedWorker);
router.route("/:id").get(getTask.getTask,getTaskController.getTask)
  
module.exports = router;