import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Recipes from "./components/Recipes/Recipes";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import "./App.css";
import Footer from "./components/Footer/Footer";
import PopularRecipes from "./components/Popular/PopularRecipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const APP_ID = "7ce5f59b";
  const APP_KEY = "9a837583775ff7df9405c3ee2b7be8a3";

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
  };

  const onSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  query={query}
                  onSearchChange={onSearchChange}
                  onSearchSubmit={onSearchSubmit}
                />
                <Recipes recipes={recipes} />
                <PopularRecipes />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;