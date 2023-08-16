import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
//import RercipeCad from "../"; 

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true");
        const data = await response.json();
        const first100Recipes = data.slice(0, 100);
        setRecipes(first100Recipes);
        setFilteredRecipes(first100Recipes); 
      } catch (error) {
        console.error("Error al obtener recetas desde la API", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list">
        {/*filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))*/}
      </div>
    </div>
  );
};

export default Home;
