const express = require("express");
const router = express.Router();
const userSignupRoute=require("./Signup.route")
const userLoginRoute=require("./login.route")
const taskRoute=require("./task.route")
//const taskRoute=require("../task.route")
const verifyToken=require('../../middlewares/verifyToken.middleware')

router.use('/register', userSignupRoute)

router.use("/login",userLoginRoute )
router.use("/task",taskRoute )
//router.use("/task",taskRoute) 

 router.post("/welcome", verifyToken.verifyToken, (req, res) => {
   res.status(200).json(req.user);
 });


module.exports = router;
