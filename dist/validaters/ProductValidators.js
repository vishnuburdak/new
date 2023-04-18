"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../modals/User");
class ProductValidators {
    static product() {
        return [
            (0, express_validator_1.body)("product_name", "product_name is Required").isString(),
            (0, express_validator_1.body)("product_price", "product_price is Required").isString(),
        ];
    }
    static editproduct() {
        return [
            (0, express_validator_1.body)("product_name", "product_name is Required").isString(),
            (0, express_validator_1.body)("product_price", "product_price is Required").isString(),
        ];
    }
    static getproductbyid() {
        return [
            (0, express_validator_1.param)("id").custom((id, { req }) => {
                return User_1.default.findOne({ _id: id }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error("User Does Not Exist");
                    }
                });
            }),
        ];
    }
    static delete() {
        return [
            (0, express_validator_1.param)("id").custom((id, { req }) => {
                return User_1.default.findOne({ _id: id }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error("User Does Not Exist");
                    }
                });
            }),
        ];
    }
}
exports.ProductValidators = ProductValidators;
