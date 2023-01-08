const task = require("../../../models/task.model");

exports.allTask=async (req, res) => {

    const t = await task.find().populate("userID");
    res.json(t);
};