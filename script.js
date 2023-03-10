// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const { fetchProducts } = require("./helpers/fetchProducts");

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const showLoading = () => {
  const header = document.querySelector('.header');
  const p = document.createElement('p');
  p.className = 'loading';
  p.innerText = 'Carregando...';
  header.appendChild(p);
  return p;
};

const offLoading = () => {
  const load = document.querySelector('.loading');
 
 return setTimeout(load.remove(), 2000);
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const callAndAppendItens = async () => {
  const getClassItems = document.querySelector('.items');
  showLoading();
  const products = await fetchProducts('computador');
  offLoading();
  const ArrayOfProducts = products.results;
  return ArrayOfProducts.forEach((element) => getClassItems
  .appendChild(createProductItemElement(element)));
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const clearCart = () => {
  const li = document.querySelector('.cart__items');
 li.innerHTML = '';
};

const buttonClearCart = () => {
const buttonClear = document.querySelector('.empty-cart');
  buttonClear.addEventListener('click', clearCart);
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const clearLiFromCart = () => {
const liCartItem = document.getElementsByClassName('cart__item');

 const returned = Array.from(liCartItem)
 .forEach(function (element) {
  element
  .addEventListener('click', (event) => {
    const el = event.target;
    return el.remove();
  });
});
return returned;
};

const createCartItemElement = (product) => {
  console.log(product);
  const cartItens = document.querySelector('.cart__items');
  const { id, title, price } = product;
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
   cartItens.appendChild(li);
  li.addEventListener('click', clearLiFromCart());
};

const fetchCartitem = async (idProduct) => {
   showLoading();
  const response = await fetchItem(idProduct); 
   offLoading();
  return createCartItemElement(response);
};

// fazer a função retornar o id, tirar do espoco do foreach
const captureButtons = () => {
  const button = document.querySelectorAll('.item__add');
   const eventForEach = button.forEach((element) => element.addEventListener('click', (event) => {
      const eventTarget = event.target.parentNode;
      
      return fetchCartitem(eventTarget.firstChild.innerText); 
    }));
    return eventForEach;
 };
 
window.onload = async () => {
   await callAndAppendItens();
   await captureButtons(); 
   await buttonClearCart();
  //  await saveCartItems();
  };

  // req 04
// capturar o ID do botão clicado V
// utilizar o id para a função fetch retornar um objeto V
// utilizar o objeto como parametro da função createCartItemElement para criar os elementos V