const express = require("express");
const router = express.Router();
const signupRoute=require("./Signup.route")
const loginRoute=require("./login.route")
const taskRoute=require("./task.route")
const verifyToken=require('../middlewares/verifyToken.middleware')

router.use('/register', signupRoute)

router.use("/login",loginRoute )

router.use("/task",taskRoute) 

 router.post("/welcome", verifyToken.verifyToken, (req, res) => {
   res.status(200).json(req.user);
 });


module.exports = router;
