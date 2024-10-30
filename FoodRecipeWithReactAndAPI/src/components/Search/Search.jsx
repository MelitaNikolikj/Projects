import React from 'react';
import Header from '../Header/Header';
import './Search.css'

const Search = ({ query, onSearchChange, onSearchSubmit }) => {
  return (
    <div className='search-container'>
        <Header/>
            <form onSubmit={onSearchSubmit} className="search-form">
                <label type='text'>Search for your recipe:</label>
                <div className='container'>
                    <input type="text" value={query} onChange={onSearchChange} className="search-input" placeholder='Enter your desired recipe'/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>
    </div>
    
  );
};

export default Search;