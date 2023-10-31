import React, { useState, useContext } from 'react';
/*useState é para criar um estado/status da search, tudo o que digitar lá, precisa ser alocado em um estado, para depois
poder pegar o valor(informação) e fazer a pesquisa, uma requsição a uma API com o valor lá informado.
useState é um HOOK (gancho) que pertence ao React.. HOOK é nada mais que uma função*/
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import featchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setprodutosQueVemDaAPI, setLoading } = useContext(AppContext);


  /*Estamos dando como parâmetro para o useState, uma STRING, que esta vazia..
  na const precisamos criar variaveis A e B, searchValue(buscarInformação) e setSearchValue(setarInformação), o set
  será uma função que servirá para atualizar o valor*/

  const [searchValue, setSearchValue] = useState('');

  /*como a chamada do feacth é async(await), aqui tambem precisa ser*/
  const lidar_manejar_SearchBar = async (event) => {
    event.preventDefault();
    setLoading(true);

    /*fazer com que a SearchBar busque as informações digitadas na API do mercado livre
    await pois na pasta api, no arquivo featchProducts.js, esta definida como sendo await*/
    const products = await featchProducts(searchValue);
    setprodutosQueVemDaAPI(products);
    setLoading(false);
    setSearchValue(''); /*depois de efetuar a pesquisa, o que foi digitado no SearchBar se apaga.. vira uma string vazia*/
  };

  return ( 

  /*ao Submit um form, há um comportamento padrão que é recarregar a pagina, não queremos que ao pressionar o enter para efetuar
  a pesquisa, a pagina toda seja recarregada, que o componente de loading aparece.. desejamos apenas que os produtos venham
  a tela.. para isto a cons foi criada*/

    <form className="search-bar" onSubmit={lidar_manejar_SearchBar}>
      {name}
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search_input" 
        onChange={ ({ target }) => setSearchValue(target.value)}
        required 
      />


      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;

