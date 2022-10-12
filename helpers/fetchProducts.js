const fetchProducts = async (produto) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  if (produto === undefined) {
 throw new Error('You must provide an url');
  }
  const requisition = await fetch(url);
  const response = await requisition.json();

  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
