const { Router } = require("express");
const recipes = require("./recipes"); // Importa el enrutador de recetas desde recipes.js
const dietsRouter = require("./diets");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use("/recipes", recipes); // recipe para las rutas de la recetas
router.use("/diets", dietsRouter);
// Ejemplo: router.use('/auth', authRouter);

//ruta para la pagina de inicio
router.get("/", (req, res) => {
  res.send("¡Bienvenido a la pagina de inicio!");
});

module.exports = router;
