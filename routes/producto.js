var express = require('express');
var router = express.Router();

const productoController = require("../controllers/productoController")
/* GET users listing. */
router.get('/', productoController.getAll);
router.get('/:id', productoController.getById);
router.post('/',productoController.create);
router.put('/:id',productoController.update);
router.delete('/:id',productoController.delete)

module.exports = router;
