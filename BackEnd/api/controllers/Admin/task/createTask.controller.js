const task = require("../../../models/task.model");

exports.createTask=async (req, res) => {
  db.createView( "sales", "orders", [
    {
       $lookup:
          {
             from: "inventory",
             localField: "prodId",
             foreignField: "prodId",
             as: "inventoryDocs"
          }
    },
    {
       $project:
          {
            _id: 0,
            prodId: 1,
            orderId: 1,
            numPurchased: 1,
            price: "$inventoryDocs.price"
          }
    },
       { $unwind: "$price" }
 ] )
    console.log(req.body.TaskName);
    const t = new task({
      TaskName: req.body.TaskName,
      Details: req.body.Details,
      Address: req.body.Address,
      Date: req.body.Date,
      Category: req.body.Category,
    });
    const newt = await t.save();
    res.status(201).json(newt);
 
  };