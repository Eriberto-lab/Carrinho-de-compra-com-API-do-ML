const fetchItem = async (ItemID) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  if (ItemID === undefined) {
    throw new Error('You must provide an url');
  }
  const requisition = await fetch(url);
  const response = await requisition.json();

  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
