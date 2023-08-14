const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Ruta para obtener el detalle de una receta específica
router.get("/:idRecipe", recipeController.getRecipeDetail);

//Ruta para buscar recetas por nombre
router.get("/search", recipeController.getRecipesByName);
// Rutas para obtener las recetas por categoría y dieta
//router.get("/diets", recipeController.getDiets);

// Ruta para crear una nueva receta
router.post("/", recipeController.createRecipe);

module.exports = router;
