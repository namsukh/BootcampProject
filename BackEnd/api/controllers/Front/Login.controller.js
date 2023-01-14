const jwt = require("jsonwebtoken");
const userModel = require("../../models/User.model");
const bcrypt = require("bcrypt");
exports.Login=async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      
      if (email == null && password == null) {
        res.status(400).send("All inputs are required");
      }
      const user = await userModel.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("Login");
        const token = await jwt.sign({ user_id: user._id,type:user.type }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
  
        user.token = token;
  
        res.status(200).send(user);
      }
      else{ res.status(400).send("Invalid Credentials");}
     
    } catch (err) {
      console.log(err);
    }
  };