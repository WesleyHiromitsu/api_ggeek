const express = require('express');
const routes = express.Router();

const Products = require('./router/Products');

//ProductController
routes.get('/products', Products.index);
routes.get('/products/:id', Products.show);
routes.post('/products', Products.store);
routes.put('/products/:id', Products.update);
routes.delete('/products/:id', Products.destroy);

routes.get('/:categoryId', function (req, res) {
  res.send(req.params.categoryId);
});

module.exports = routes;
