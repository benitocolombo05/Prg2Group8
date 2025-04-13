var express = require("express");
var router = express.Router();
var productsController = require("../controllers/productsController");

router.get("/products", productsController.index);
router.get("/agregar", productsController.add);
router.get('/search', productsController.buscar)

module.exports = router;