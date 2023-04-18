import { body, param } from "express-validator";
import User from "../modals/User";

export class UserValidators {
  static signup() {
    return [
      body("email", "Email is Required")
        .isEmail()
        .custom((email, { req }) => {

            return User.findOne({ email: email }).then((user) => {
            if (user) {
              throw new Error("User Already Exist");
            } else {
              return true;
            }
          });
        }),
      body(
        "password",
        "Your password must contain min. one number & one special character & one uppercase with min length 8."
      ).isStrongPassword(),
      body("phone", "phone is Required").isNumeric().isLength({ min: 10 }),
      body("first_name", "first_name is Required").isString(),
      body("last_name", "last_name is Required").isString(),
    ];
  }

  static login() {
    return [
      body("email", "Email is Required")
        .isEmail()
        .custom((email, { req }) => {
          return User.findOne({ email: email }).then((user) => {
            if (user) {
              req.user = user;
              return true;
            } else {
              throw new Error("User Does Not Exist");
            }
          });
        }),
      body(
        "password",
        "Your password must contain min. one number & one special character & one uppercase with min length 8."
      ).isStrongPassword(),
    ];
  }


  static edituser() {
    return [

      body("email", "Email is Required").isEmail(),
      body(
        "password",
        "Your password must contain min. one number & one special character & one uppercase with min length 8."
      ).isStrongPassword(),
      body("phone", "phone is Required").isNumeric().isLength({ min: 10 }),
      body("username", "username is Required").isString(),
    ];
  }



     
  static getuserbyid() {
    return [
      param("id").custom((id, { req }) => {
        return User.findOne({ _id: id }).then((user) => {
          if (user) {
            req.user = user;
            return true;
          } else {
            throw new Error("User Does Not Exist");
          }
        });
      }),
    ];
  }




  static delete() {
    return [
      param("id").custom((id, { req }) => {
        return User.findOne({ _id: id }).then((user) => {
          if (user) {
            req.user = user;
            return true;
          } else {
            throw new Error("User Does Not Exist");
          }
        });
      }),
    ];
  }
}
