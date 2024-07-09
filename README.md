# E-waste: API de Sugestão de Programas de Reciclagem de Lixo Eletrônico

Este projeto foi desenvolvido como parte do Módulo 4 da formação FullStack na Programadores do Amanhã. O objetivo é criar uma solução prática para o problema crescente do descarte inadequado de resíduos eletrônicos. Com o avanço da tecnologia, cada vez mais dispositivos eletrônicos são descartados, e muitos deles contêm materiais tóxicos que podem causar danos significativos ao meio ambiente e à saúde humana se não forem corretamente gerenciados.

A e-Waste API busca facilitar o processo de descarte de resíduos eletrônicos, permitindo que empresas e indivíduos localizem facilmente pontos de coleta onde esses itens podem ser deixados para reciclagem ou descarte seguro. A API serve como um intermediário, conectando doadores de lixo eletrônico com centros de coleta certificados, garantindo que os resíduos sejam tratados de forma adequada.

## Funcionalidades

- Listar todos os pontos de coleta de lixo eletrônico.
- Filtrar pontos de coleta por cidade.
- Filtrar pontos de coleta por tipo de eletrônico.
- Adicionar novos pontos de coleta.
- Remover pontos de coleta existentes.

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- UUID para geração de IDs únicos

## Configuração do Projeto

### Pré-requisitos

- Node.js instalado
- npm (Node Package Manager) ou yarn

### Instalação

1. Clone o repositório

    ```bash
   git clone https://github.com/ste-coding/miniprojeto-api-M4.git

2. Instale as dependências

    ```bash
    npm install express joi uuid cors

3. Para iniciar o servidor de desenvolvimento, use:
    ```bash
    npm run dev


### Uso da API
- Listar Todos os Pontos de Coleta

    **GET: /recycling-points** - Retorna todos os pontos de coleta de lixo eletrônico.

- Filtrar Pontos de Coleta por Cidade

    **GET: /recycling-points/city/{city}** - Filtra os pontos de coleta pela cidade especificada.

- Filtrar Pontos de Coleta por Tipo de Eletrônico

    **GET: /recycling-points/type/{type}** - Filtra os pontos de coleta pelo tipo de eletrônico especificado.

- Adicionar Novo Ponto de Coleta

    **POST /recycling-points** - Adiciona um novo ponto de coleta. Deve incluir no corpo da requisição o nome, cidade e tipo de eletrônico do ponto de coleta.

- Remover Ponto de Coleta

    **DELETE /recycling-points/{id}** - Remove o ponto de coleta com o ID especificado.

## Estrutura do Projeto

**src/index.js**: O ponto de entrada da aplicação. Este arquivo configura e inicia o servidor Express.

**src/routes/recyclingPoints.routes.js**: Define as rotas da API relacionadas aos pontos de coleta de resíduos eletrônicos, incluindo rotas para listar, adicionar, filtrar e remover pontos de coleta.

**src/controllers/recyclingPoints.controller.js**: Contém a lógica para manipulação das requisições da API. Cada função corresponde a uma rota e define o que acontece quando a rota é acessada.

**src/models/recyclingPoints.model.js**: Define a estrutura dos dados dos pontos de coleta. Utiliza uma classe para representar os pontos de coleta e métodos para manipulação desses dados.

**src/db.json**: Arquivo de banco de dados simulado, onde os dados dos pontos de coleta são armazenados localmente em formato JSON.