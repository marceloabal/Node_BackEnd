var express = require('express');
var router = express.Router();

const usuarioController = require("../controllers/usuarioController")
/* GET users listing. */
router.get('/', usuarioController.getAll);
router.get('/:id', usuarioController.getById);
router.post('/',usuarioController.create);
router.put('/:id',usuarioController.update);
router.delete('/:id',usuarioController.delete);

module.exports = router;
