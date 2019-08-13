const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  b_price: {
    type: String,
    required: true
  },
  s_price: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  sold: {
    type: Array,
    default: []
	}
});



mongoose.model('Product', ProductSchema);
