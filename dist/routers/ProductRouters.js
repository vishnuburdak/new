"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const ProductValidators_1 = require("../validaters/ProductValidators");
const ProductController_1 = require("../controllers/ProductController");
const GlobalMiddleware_1 = require("../globalmiddleware/GlobalMiddleware");
const Utils_1 = require("../utils/Utils");
class ProductRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getallproduct", ProductController_1.ProductController
            .getallproduct);
        this.router.get("/getproductbyid/:id", ProductValidators_1.ProductValidators.getproductbyid(), GlobalMiddleware_1.GlobalMiddleware.checkError, ProductController_1.ProductController.getproductbyid);
    }
    postRoutes() {
        this.router.post("/product", new Utils_1.Utils().multer.single("product_pic"), ProductValidators_1.ProductValidators.product(), GlobalMiddleware_1.GlobalMiddleware.checkError, ProductController_1.ProductController.product);
    }
    patchRoutes() {
        this.router.patch("/editproduct/:id", ProductValidators_1.ProductValidators.editproduct(), GlobalMiddleware_1.GlobalMiddleware.checkError, ProductController_1.ProductController.editproduct);
    }
    deleteRoutes() {
        this.router.delete("/deleteproduct/:id", ProductValidators_1.ProductValidators.delete(), GlobalMiddleware_1.GlobalMiddleware.checkError, ProductController_1.ProductController.delete);
    }
}
exports.ProductRouter = ProductRouter;
exports.default = new ProductRouter().router;
