"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../modals/User");
class UserValidators {
    static signup() {
        return [
            (0, express_validator_1.body)("email", "Email is Required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then((user) => {
                    if (user) {
                        throw new Error("User Already Exist");
                    }
                    else {
                        return true;
                    }
                });
            }),
            (0, express_validator_1.body)("password", "Your password must contain min. one number & one special character & one uppercase with min length 8.").isStrongPassword(),
            (0, express_validator_1.body)("phone", "phone is Required").isNumeric().isLength({ min: 10 }),
            (0, express_validator_1.body)("first_name", "first_name is Required").isString(),
            (0, express_validator_1.body)("last_name", "last_name is Required").isString(),
        ];
    }
    static login() {
        return [
            (0, express_validator_1.body)("email", "Email is Required")
                .isEmail()
                .custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then((user) => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error("User Does Not Exist");
                    }
                });
            }),
            (0, express_validator_1.body)("password", "Your password must contain min. one number & one special character & one uppercase with min length 8.").isStrongPassword(),
        ];
    }
    static edituser() {
        return [
            (0, express_validator_1.body)("email", "Email is Required").isEmail(),
            (0, express_validator_1.body)("password", "Your password must contain min. one number & one special character & one uppercase with min length 8.").isStrongPassword(),
            (0, express_validator_1.body)("phone", "phone is Required").isNumeric().isLength({ min: 10 }),
            (0, express_validator_1.body)("username", "username is Required").isString(),
        ];
    }
    static getuserbyid() {
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
exports.UserValidators = UserValidators;
