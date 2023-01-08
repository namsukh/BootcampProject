const jwt = require("jsonwebtoken");
const Admin = require("../../models/Admin.model");
const bcrypt = require("bcrypt");
exports.Login=async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      if (email == null && password == null) {
        res.status(400).send("All inputs are required");
      }
      const user = await Admin.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("Login");
        const token = await jwt.sign({ email:email }, process.env.TOKEN_KEY, {
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