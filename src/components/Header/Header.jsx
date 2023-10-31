import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';
import CardButton from '../CardButton/CardButton';

function Header() {
  return (
    <header className="header">
      <div className="container">
       
        <SearchBar />
        <CardButton /> 

      </div>
    </header>
  );
}

export default Header;