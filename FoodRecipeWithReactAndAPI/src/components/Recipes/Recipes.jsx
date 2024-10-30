import React, { useState } from 'react';
import Modal from 'react-modal';
import './Recipes.css';

const RecipeList = ({ recipes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };

  const openRecipeWebsite = (url) => {
    window.open(url, '_blank'); // Opens URL in new tab
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <div className="recipe-details">
            <h2>{recipe.recipe.label}</h2>
            <div className="button-group">
              <button onClick={() => openModal(recipe.recipe)} className='primarybtn'>View Ingredients</button>
              <button onClick={() => openRecipeWebsite(recipe.recipe.url)} className='secondarybtn'>Show Recipe</button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal for displaying ingredients */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedRecipe ? selectedRecipe.label : ''}</h2>
        <ul>
          {selectedRecipe &&
            selectedRecipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.text}</li>
            ))}
        </ul>
        <button onClick={closeModal} className='modalbtn'>Close</button>
      </Modal>
    </div>
  );
};

export default RecipeList;