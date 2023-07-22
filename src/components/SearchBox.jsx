import React, { useState } from 'react';
import '../searchbox.css'
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log('Searching for:', searchTerm);
    // Clear the search term
    setSearchTerm('');
  };

  return (
    <form className="search-box" onSubmit={handleSearchSubmit}>
      <input
        className='text'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className='button' type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
