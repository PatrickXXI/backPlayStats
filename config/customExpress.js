// Importa as bibliotecas necessárias como variáveis
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    // Configura o middleware para interpretar dados no formato urlencoded e JSON
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Inclui automaticamente as rotas da pasta 'controller' no app, usando o Consign
    consign().include('controller').into(app);

    return app;
};

// Configurações iniciais do servidor Express para carregar as bibliotecas e rotas.
// Se desejar usar outra biblioteca, basta importar com require em outro arquivo.