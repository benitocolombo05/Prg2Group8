var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productsController");

router.get("/", productsController.index);
router.get("/agregar", productsController.add);
router.get('/search', productsController.buscar)
router.get('/:id', productsController.index);
router.post('/productProcessor', productsController.productProcessor);
router.post('/commentProcessor/:id', productsController.commentProcessor);

module.exports = router;