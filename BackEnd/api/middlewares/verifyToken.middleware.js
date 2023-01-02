
exports.verifyToken = (req, res, next)  =>  {
    const authHeader = req.body.token || req.query.token || req.headers["authorization"];
    console.log("verifyToken")
    if (!authHeader) {
      return res.status(401).send("A token is required for authentication");
    }
    try {
  
      var token= authHeader.split(' ')[1]
       jwt.verify(token, process.env.TOKEN_KEY,(err,user)=>{
        req.user = user;
        console.log("user is ",user)
       });
      
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
     next();
  };