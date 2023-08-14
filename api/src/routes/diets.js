const express = require("express");
const router = express.Router();
const {getDietsHandler} = require("../Handlers/dietHandler")


//ruta para obtener todas las definiciones de dietas
router.get("/", getDietsHandler);

module.exports = router;
