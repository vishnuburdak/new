import { Router } from "express";
import { ProductValidators } from "../validaters/ProductValidators";
import { ProductController } from "../controllers/ProductController";
import { GlobalMiddleware } from "../globalmiddleware/GlobalMiddleware";
import { Utils } from "../utils/Utils";
export class ProductRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.getRoutes();

    this.postRoutes();

    this.patchRoutes();

    this.deleteRoutes();
  }
  getRoutes() {
    this.router.get("/getallproduct",
     ProductController
     .getallproduct

     );
    this.router.get(
        "/getproductbyid/:id",
        ProductValidators.getproductbyid(),
        GlobalMiddleware.checkError,
        ProductController.getproductbyid,
        );
  }
  postRoutes() {
    this.router.post(
      "/product",
      new Utils().multer.single("product_pic"),
      ProductValidators.product(),
      GlobalMiddleware.checkError,
      ProductController.product
    );
  }

  patchRoutes() {
    this.router.patch(
        "/editproduct/:id",
        ProductValidators.editproduct(),
        GlobalMiddleware.checkError,
        ProductController.editproduct);
  }

  deleteRoutes() {
    this.router.delete(
      "/deleteproduct/:id",
      ProductValidators.delete(),
      GlobalMiddleware.checkError,
      ProductController.delete
    );
  }
}

export default new ProductRouter().router;
