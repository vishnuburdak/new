import Product from "../modals/Product";
import { Utils } from "../utils/Utils";
import * as Jwt from "jsonwebtoken";
import { getEnvironmentVariables } from "../environments/env";

export class ProductController {
    static async product(req, res, next) {
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
  
        let user = await new Product(data).save();
        res.send(user);
      } catch (error) {
        next(error);
      }
    }
  



    static async editproduct(req, res, next) {
    
      const userid = req.params.id

      const product_name = req.body.product_name;
      const product_price = req.body.product_price;
      const product_pic_url = req.body.product_pic_url;

      try {
        
        let user = await Product.findOneAndUpdate({_id:userid},{ product_name:product_name,
          product_price:product_price,
          product_pic_url:product_pic_url,
          },{new:true});
 
        res.send(user);
      } catch (error) {
        next(error);
      }
    }
  



  static async getallproduct(req, res, next) {
  try {
    const data = await Product.find({});
    res.send(data);

  } catch (error) {
    next(error);
  }

  }

  
  static async productdetails(req, res, next) {
    const product = req.product;
    try {

      const token = Jwt.sign(
        {
           product_name: product.product_name,
           product_price: product.product_name,
           product_pic_url: product.product_name,
           product_id: product._id },
        getEnvironmentVariables().jwt_secret,
        { expiresIn: "120d" }
      );

      const data = { token: token, product: product};
      res.json(data);
    } catch (e) {
      next(e);
    }
  }



  
  static async delete(req, res, next) {
    const deleteproduct = req.user;
    try {
      const deletedproduct = await deleteproduct.remove();
      res.send(deletedproduct);
    } catch (error) {
      next(error);
    }
  }

 
  static async getproductbyid(req, res, next) {
    const user = req.user;
    try {
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}







  
  