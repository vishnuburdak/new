"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const productSchema = new mongoose.Schema({
    product_pic_url: { type: String, required: true },
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("products", productSchema);
