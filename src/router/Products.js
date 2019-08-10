const mongoose = require('mongoose');

const Product = mongoose.model('Product');

async function addNewProduct(id) {
  const product = await Product.findById(id);

  let currentQuantity = product.sold; // []

  let meuNovoProdutoVendido = {
    date: Date.now(),
    quantity: 1
  };

  // https://www.w3schools.com/jsref/jsref_push.asp

  currentQuantity.push(meuNovoProdutoVendido);

  product.sold = currentQuantity;

  return await product.save();
}

async function removeOneProduct(id) {
  const product = await Product.findById(id);

  let currentQuantity = product.amount; // []

  currentQuantity = currentQuantity - 1;

  product.amount = currentQuantity;

  return await product.save();
}

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async category(req, res) {
    const product = await Product.find({category: req.params.category});

    return res.json(product);
  },

  async newProductSold(req, res) {

    try {
      await addNewProduct(req.params.id);
    	await removeOneProduct(req.params.id);

      res.send('Deu certo');
    } catch (err) {
      res.send(err);
    }
  },


};
