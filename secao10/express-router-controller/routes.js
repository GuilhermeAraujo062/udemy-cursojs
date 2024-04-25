const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoControler = require('./controllers/contatoControler');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoControler.paginaInicial);

module.exports = route;