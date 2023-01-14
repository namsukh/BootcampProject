const user = require("../../../models/User.model");

exports.publiceProfile=async (req, res) => {

    const t = await user.find(req.body.id);
    
    res.json(t);
};