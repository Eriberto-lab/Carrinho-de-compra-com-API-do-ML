# 🛒Projeto Carrinho de Comprar com API do Mercado Livre🛒
### Link do projeto: carrinhoml.netlify.app

Este projeto é um carrinho de compras virtual que utiliza a API do Mercado Livre para buscar produtos e realizar as operações básicas de um carrinho, como adicionar e remover itens, exibir o valor total da compra e finalizar o pedido.


## Funcionalidades

O carrinho de compras realiza a requisição para a API do Mercado Livre, permitindo a busca de produtos por meio de termos e categorias. Além disso, foi adicionado um elemento de loading para indicar ao usuário que a tarefa está sendo executada.

O carrinho de compras também utiliza o local storage para armazenar os itens selecionados pelo usuário e exibi-los no carrinho, permitindo que o usuário adicione e remova itens e veja o valor total da compra atualizado em tempo real. É possível excluir todos os itens do carrinho e do local storage clicando no botão "Esvaziar carrinho".

Para garantir a qualidade do projeto, foram adicionados testes unitários com JEST, que garantem que as funções básicas do carrinho de compras estejam funcionando corretamente.

* Realiza requisição para API.
* Adiciona elemento de loading quando é realizada uma tarefa.
* Adiciona itens no local storage e exibe no carrinho.
* Exclui itens do carrinho e do local storage quando clicado no item ou no botão 'Esvaziar carrinho'.
* Testes unitarios com JEST.



