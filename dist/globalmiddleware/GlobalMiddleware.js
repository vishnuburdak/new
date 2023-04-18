"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddleware = void 0;
const express_validator_1 = require("express-validator");
class GlobalMiddleware {
    static checkError(req, res, next) {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            next(new Error(error.array()[0].msg));
            return;
        }
        else {
            next();
        }
    }
}
exports.GlobalMiddleware = GlobalMiddleware;
