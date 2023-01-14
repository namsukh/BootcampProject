const user = require("../../../models/User.model")

exports.delUser=async (req, res) => {
    try {
       console.log("indsier",5)
        const id = req.params.id;
        console.log(id);
        const newt = await user.deleteOne({ _id: id });
                     
        if (newt.deletedCount === 1) {
          res.status(202).send("deleted");
        } else {
          res.status(404).send("NotFound");
        }
      } catch(err) {
        res.json(err)
      }
};