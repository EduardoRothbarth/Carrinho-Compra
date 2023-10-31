/*currency como propriedade/parameto e depois currency abaixo no toLocaleString, torna dinamico a informação da moeda, caso a 
desejemos apresentar o valor em moeda como Dolar ou Euro, só alterar o BRL no arquivo ProductCard para o que desejarmos.*/
const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;