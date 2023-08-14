const { Sequelize } = require("sequelize");
const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
const { api } = require("../ApiConections/apiConection.js");

//(POST) crear nueva receta y relacion con los tipos de dieta
async function createRecipe(req, res) {
  try {
    const { name, Image, summary, healthScore, steps, diets } = req.body;

    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healtScore,
      steps,
    });

    const dietTypes = await Diet.findAll({
      where: {
        id: Diet,
      },
    });

    //asociar la receta con los tipos de dieta
    await newRecipe.addDiets(dietTypes);

    res
      .status(201)
      .json({ message: "Receta creada exitosamente", recipe: newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la receta" });
  }
}

//(GET)detalle de una receta específica
async function getRecipeDetail(req, res) {
  try {
    const { idRecipe } = req.params;

    //buscar receta por id en base de datos
    const recipe = await Recipe.findByPk(idRecipe, {
      include: [{ model: Diet, through: "recipe_diets" }],
    });
    if (!recipe) {
      return res.status("404").json({ error: "Receta no encontrada" });
    }
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener detalle de la receta " });
  }
}

//(GET)buscar recetas por nombre
async function getRecipesByName(req, res) {
  try {
    const { name } = req.query;
    const lowerCaseName = name.toLowerCase();

    //buscar recetas en base de datos por coincidencia de nombre
    const dbRecipes = await Recipe.findAll({
      where: {
        name: {
          [Sequelize.beforeFindAfterOptions.iLike]: `%${lowerCaseName}%`,
        },
      },
      include: [{ model: Diet, through: "recipe:diets" }],
    });
    // Buscar recetas en la API externa por coincidencia de nombre
    const apiKey = "SPOONACULAR_API_KEY=0e31055e8894452384686b79920c9b00";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${encodeURIComponent(
      name
    )}`;
    const apiResponse = await axios.get(apiUrl);

    const apiRecipes = apiResponse.data.results.map((result) => {
      return {
        id: result.id,
        name: result.title,
        Image: result.image,
      };
    });

    const allRecipes = [...dbRecipes, ...apiRecipes];

    if (allRecipes.length === 0) {
      return res.status(400).json({ message: "No se encontraron recetas" });
    }

    res.json(allRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al odtoner recetas por nombres" });
  }
}
module.exports = {
  createRecipe,
  getRecipeDetail,
  getRecipesByName,
};
