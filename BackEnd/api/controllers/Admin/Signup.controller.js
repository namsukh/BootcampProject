const jwt = require("jsonwebtoken");
const Admin = require("../../models/Admin.model");
const bcrypt = require("bcrypt");
exports.Signup = async (req, res, next) => {
try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input are required");
    }

    const oldUser = await Admin.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await Admin.create({
      email: email.toLowerCase(),
      password: hashPassword,
    });

    const token = jwt.sign(
      { user_id: Admin._id },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}