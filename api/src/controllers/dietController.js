const axios = require("axios");
const { Diet } = require("../db.js");
const  api  = require("../ApiConections/apiConection.js");
const {SPOONACULAR_API_KEY} = process.env


//(GET) obtener definicion de las dietas desde la API, guardarlas en base de datos
async function fetchAndSaveDiets() {
  try {
    const apiUrl = `${api.api.baseURL}&apiKey=${SPOONACULAR_API_KEY}&query=diet`;

    const {data} = await axios.get(apiUrl);
    const dietDefinitions = data.results[0].diets;

    //guardar las definiciones de dietas en la base de datos
    await Diet.bulkCreate(dietDefinitions.map((name) => ({ name })));

    console.log("Deifinicion de dietas guardadas en la base de datos");
  } catch (error) {
    console.log("esto es diet controller error ", error.message)
  }
}

//(GET) obtener todas las definiciones de dietas desde la base de datos
async function getDiets() {
  try {
    const diets = await Diet.findAll();
   return diets;
  } catch (error) {
    console.error("esto es diet controller error ",error.message);
   return error.message;
  }
}
module.exports = { fetchAndSaveDiets, getDiets };
