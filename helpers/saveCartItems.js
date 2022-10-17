const saveCartItems = () => {
  // seu código aqui
  const olInnerContent = document.querySelectorAll('.cart__item');

    return localStorage.setItem(JSON.stringify(olInnerContent));
  // olInnerContent.forEach((element) => localStorage
  // .setItem('cartItems', JSON.stringify(element.innerText)));
};
const addTolocalStorage = () => {
  const buttonAdd = document.querySelectorAll('.item__add');
  buttonAdd.forEach((element) => element.addEventListener('click', saveCartItems));
};

window.onload = async () => {
 await addTolocalStorage();
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
