var mongoose =require("mongoose")
require("dotenv").config();
exports.connect = () => {

mongoose.connect("mongodb://"+process.env.urlDatabse);

  return mongoose.connection;

};