const express = require("express");
const router = express.Router();
const adminSignupRoute=require("./admin/Signup.route")
const adminLoginRoute=require("./admin/login.route")
const taskRoute=require("./task.route")
const verifyToken=require('../middlewares/verifyToken.middleware')
const user=require("../controllers/Admin/users/allUsers.controller")
const delUser=require("../controllers/Admin/users/delUser.controller")
const getUser=require('./../middlewares/getUserAdmin.middleware')
const userController=require("./../controllers/Admin/users/getUser.controller")

router.use('/register', adminSignupRoute)

router.use("/login",adminLoginRoute )



router.use("/task",taskRoute) 

 router.post("/welcome", verifyToken.verifyToken, (req, res) => {
   res.status(200).json(req.user);
 });
 router.get("/user", user.allUsers, (req, res) => {
  res.status(200).json(req.user);
});
router.delete("/del/user/:id", delUser.delUser);
router.route("/userProfile/:id").get(getUser.getUser,userController.getUser);


module.exports = router;
