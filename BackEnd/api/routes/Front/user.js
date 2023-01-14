const express = require("express");
const multer= require("multer")
const bodyParser = require("body-parser");

const router = express.Router();
const userSignupRoute=require("./Signup.route")
const userLoginRoute=require("./login.route")
const taskRoute=require("./task.route")
//const taskRoute=require("../task.route")
const verifyToken=require('../../middlewares/verifyToken.middleware')
const getUser=require('../../middlewares/getUser.middleware')
const updateUser=require("../../controllers/Front/task/updateUser")
const userController=require("../../controllers/Front/getUser.controller")
router.use(bodyParser.urlencoded({limit: '1mb'}));

router.use('/register', userSignupRoute)

router.use("/login",userLoginRoute )
router.use("/task",taskRoute )

//router.use("/task",taskRoute) 
router.route("/updateUser/").patch(verifyToken.verifyToken,getUser.getUser,updateUser.updateUser);
router.route("/userProfile/").get(verifyToken.verifyToken,getUser.getUser,userController.getUser);

 router.post("/welcome", verifyToken.verifyToken, (req, res) => {
   res.status(200).json(req.user);
 });
 router.post("/upload",verifyToken.verifyToken, (req, res) => {
 
  console.log("Id is "+req.user.user_id)
  const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"img")
    },
    filename:(req,file,cb)=>{
    
        cb(null,(req.user.user_id+".jpg"))
    }
})
var upload = multer({storage:storage}).single('img');

upload(req, res, function(error){

  if(error)
  {
    return res.end('Error Uploading File');
  }
  else
  {
    return res.send('File is uploaded successfully');
  }

});

 // res.status(200).send("Uploaded");
});
router.get("/view",(req,res)=>{
  res.set('Content-Type', 'image/jpeg')
  res.sendFile("/home/naumansukhera/homeService/BackEnd/img/63bc105182a01f2f5f43594b.jpg")
} )


module.exports = router;
