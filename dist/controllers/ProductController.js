"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const Product_1 = require("../modals/Product");
const Jwt = require("jsonwebtoken");
const env_1 = require("../environments/env");
class ProductController {
    static product(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const fileUrl = "http://localhost:5000/" + req.file.path;
            const product_name = req.body.product_name;
            const product_price = req.body.product_price;
            try {
                const data = {
                    product_name,
                    product_price,
                    product_pic_url: fileUrl,
                };
                let user = yield new Product_1.default(data).save();
                res.send(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static editproduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userid = req.params.id;
            const product_name = req.body.product_name;
            const product_price = req.body.product_price;
            const product_pic_url = req.body.product_pic_url;
            try {
                let user = yield Product_1.default.findOneAndUpdate({ _id: userid }, { product_name: product_name,
                    product_price: product_price,
                    product_pic_url: product_pic_url,
                }, { new: true });
                res.send(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getallproduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield Product_1.default.find({});
                res.send(data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static productdetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.product;
            try {
                const token = Jwt.sign({
                    product_name: product.product_name,
                    product_price: product.product_name,
                    product_pic_url: product.product_name,
                    product_id: product._id
                }, (0, env_1.getEnvironmentVariables)().jwt_secret, { expiresIn: "120d" });
                const data = { token: token, product: product };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteproduct = req.user;
            try {
                const deletedproduct = yield deleteproduct.remove();
                res.send(deletedproduct);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getproductbyid(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            try {
                res.send(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProductController = ProductController;
