//* models/Brand.js
const mongoose = require('mongoose');

//TODO Define the Brand schema
const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    remarks: {
        type: String,
        default: 'Note'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

//TODO Create the model
const Brand = mongoose.model('brand', BrandSchema);

module.exports = Brand;
