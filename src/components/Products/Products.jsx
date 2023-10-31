import React, { useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductsCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

  const {produtosQueVemDaAPI, setprodutosQueVemDaAPI, loading, setLoading} = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((respostaDaAPI) => {
      setprodutosQueVemDaAPI(respostaDaAPI);
      setLoading(false);
    });
  }, []);

  return (
    /*São duas className, uma chamada products e a outra container, esta container é para aproveitar o estilo css criado em index.css,
    terá o mesmo padrão que o header */
    (loading && <Loading /> ) || (<section className="products container"> 
      {produtosQueVemDaAPI.map((vemDaAPI) =>  <ProductCard key={vemDaAPI.id} data={vemDaAPI} />)}   
    </section>
    )    
  );
}

export default Products;