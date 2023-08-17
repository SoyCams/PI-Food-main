import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  const { id, title, image, diets } = recipe;

  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Diets: {diets.join(', ')}</p>
      <a href={`/recipe/${id}`}>Ver detalles</a>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    diets: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RecipeCard;

