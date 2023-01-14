const user = require("../../../models/User.model");

exports.allUsers=async (req, res) => {

    const t = await user.find();
    res.json(t);
};