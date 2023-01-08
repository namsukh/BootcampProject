//req.body.token || req.query.token || 
const jwt = require('jsonwebtoken');
exports.verifyToken = (req, res, next)  =>  {
    const authHeader = req.headers["authorization"];
    console.log("verifyToken",authHeader)
    if (!authHeader) {
      console.log("Empty")
      return res.status(401).send("A token is required for authentication");
    }
    try {
      console.log("key",process.env.TOKEN_KEY);
      const token= authHeader.split(' ')[1]
       jwt.verify(token, process.env.TOKEN_KEY,(err,user)=>{
        req.user = user;
        console.log("user is ",user)
       });
      
    } catch (err) {
      return res.status(401).send("Invlaid Token ");
    }
     next();
  };