const jwt = require("jsonwebtoken");
const userModel = require("../../models/User.model");
const bcrypt = require("bcrypt");
exports.Signup = async (req, res, next) => {
try {
    const  email = req.body.email;
    const  password = req.body.password;
    const  name = req.body.name;
    const type= req.body.type;
    const category=req.body.category;

    if (!(email && password && name && type)) {
      res.status(400).send("All input are required");
    }

    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email: email.toLowerCase(),
      password: hashPassword,
      name:name,
      type:type,
      category:category


    });

    const token = jwt.sign(
      { user_id: user._id },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    res.status(400).send("Error")
    console.log(err);
  }
}