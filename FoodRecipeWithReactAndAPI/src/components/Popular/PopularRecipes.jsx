import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './PopularRecipes.css'; // Import CSS file

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const APP_ID = "7ce5f59b";
  const APP_KEY = "9a837583775ff7df9405c3ee2b7be8a3";

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=popular&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=8`
        );
        setPopularRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      }
    };

    fetchPopularRecipes();
  }, []); // Empty dependency array ensures useEffect runs only once

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };

  return (
    <div className="popular-recipes">
      <h2>Most Popular Recipes</h2>
      <div className="recipe-cards">
        {popularRecipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <div className="recipe-details">
              <h3>{recipe.recipe.label}</h3>
              <button onClick={() => openModal(recipe.recipe)}>View Recipe</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying recipe details */}
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
        <button onClick={closeModal} className="modalbtn">Close</button>
      </Modal>
    </div>
  );
};

export default PopularRecipes;