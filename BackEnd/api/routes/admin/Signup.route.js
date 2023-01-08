const express = require("express");
const router = express.Router();
const controller = require('../../controllers/Admin/Signup.controller')


router.route('/').post(controller.Signup);


module.exports = router;
