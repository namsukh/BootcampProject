const userAdmin = require("../models/User.model");
exports.getUser=async(req, res, next) =>{
    let data;
    try {
      data = await userAdmin.findById(req.params.id);
      if (data == null) {
        return res.status(404).json({ message: "user dosen't  exist" });
      }
     
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.user = data;
    next();
}