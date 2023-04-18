import { body, param } from "express-validator";
import User from "../modals/User";

export class ProductValidators {
  static product() {
    return [
      body("product_name", "product_name is Required").isString(),
      body("product_price", "product_price is Required").isString(),
    ];
  }

  static editproduct() {
    return [  
        body("product_name", "product_name is Required").isString(),
        body("product_price", "product_price is Required").isString(),
    ];
  }



     
  static getproductbyid() {
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
