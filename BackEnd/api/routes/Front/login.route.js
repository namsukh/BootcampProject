const express = require("express");
const router = express.Router();
const controller = require('../../controllers/Front/Login.controller');


router.route('/').post(controller.Login);


module.exports = router;
