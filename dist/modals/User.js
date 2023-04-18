"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userSchema);
