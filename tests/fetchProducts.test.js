require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function')
  })
  it('Execute a função fetchProducts com o argumento /computador/ e teste se fetch foi chamada;', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint', async () => {
    await expect(fetchProducts('computador')).resolves.toBe('https://api.mercadolibre.com/sites/MLB/search?q=computadorr');
  });

  it('Teste se o retorno da função fetchProducts com o argumento /computador/ é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url')
  });
});
