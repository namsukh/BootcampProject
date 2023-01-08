const express = require("express");
const router = express.Router();
const adminSignupRoute=require("./admin/Signup.route")
const adminLoginRoute=require("./admin/login.route")
const taskRoute=require("./task.route")
const verifyToken=require('../middlewares/verifyToken.middleware')

router.use('/register', adminSignupRoute)

router.use("/login",adminLoginRoute )

router.use("/task",taskRoute) 

 router.post("/welcome", verifyToken.verifyToken, (req, res) => {
   res.status(200).json(req.user);
 });


module.exports = router;
