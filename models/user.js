const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: {
       type : Number ,
       required: true 

    },
    quantity: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;