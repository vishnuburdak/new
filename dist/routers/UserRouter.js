"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const UserValidators_1 = require("../validaters/UserValidators");
const UserController_1 = require("../controllers/UserController");
const GlobalMiddleware_1 = require("../globalmiddleware/GlobalMiddleware");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/getalluser", UserController_1.UserController.getalluser);
        this.router.get("/getuserbyid/:id", UserValidators_1.UserValidators.getuserbyid(), GlobalMiddleware_1.GlobalMiddleware.checkError, UserController_1.UserController.getuserbyid);
    }
    postRoutes() {
        this.router.post("/signup", UserValidators_1.UserValidators.signup(), GlobalMiddleware_1.GlobalMiddleware.checkError, UserController_1.UserController.signup);
        this.router.post("/login", UserValidators_1.UserValidators.login(), GlobalMiddleware_1.GlobalMiddleware.checkError, UserController_1.UserController.login);
    }
    patchRoutes() {
        this.router.patch("/edituser/:id", UserValidators_1.UserValidators.edituser(), GlobalMiddleware_1.GlobalMiddleware.checkError, UserController_1.UserController.edituser);
    }
    deleteRoutes() {
        this.router.delete("/delete/:id", UserValidators_1.UserValidators.delete(), GlobalMiddleware_1.GlobalMiddleware.checkError, UserController_1.UserController.delete);
    }
}
exports.UserRouter = UserRouter;
exports.default = new UserRouter().router;
