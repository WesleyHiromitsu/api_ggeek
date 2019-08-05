const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
  s_amount: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
