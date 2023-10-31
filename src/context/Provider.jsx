import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({children}){

  const [produtosQueVemDaAPI, setprodutosQueVemDaAPI] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const value = {
    produtosQueVemDaAPI, 
    setprodutosQueVemDaAPI,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible, 
    setIsCartVisible
  };

  return (
    <AppContext.Provider value= { value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;