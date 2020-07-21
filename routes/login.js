var express = require('express');
var router = express.Router();

const loginController = require("../controllers/loginController")
/* GET users listing. */
router.post('/:id', loginController.login);
router.put('/:id',loginController.update)


module.exports = router;
