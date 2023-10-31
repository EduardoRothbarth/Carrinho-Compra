import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';

import './ProductsCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard( { data } ) {

  const { title, thumbnail, price} = data;

  const {cartItems, setCartItems} = useContext(AppContext);

  const lidar_manejar_AddCart = () => setCartItems([... cartItems, data]);

  return (
    <section className="product-card">
        
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} /*truque para melhorar a qualidade da imagem dos produtos, todos os produtos tem
        sua URL, e no final dela há uma LETRA seguida do .jpg, a letra define a qualidade da image. então a item é replace, substituir
        qualquer coisa (\w\) que seja seguida de .jpg, isto será verificado em toda a URL (g = global / i = não importa se é
        case sensitive=MAISCULAminuscula), então subtitua POR... W.jpg*/
        alt="fotoProduto" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button 
        type="button" 
        className="button__add_cart"
        onClick={lidar_manejar_AddCart}
      >
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;