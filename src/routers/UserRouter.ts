import { Router } from "express";
import { UserValidators } from "../validaters/UserValidators";
import { UserController } from "../controllers/UserController";
import { GlobalMiddleware } from "../globalmiddleware/GlobalMiddleware";
import { Utils } from "../utils/Utils";
export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.getRoutes();

    this.postRoutes();

    this.patchRoutes();

    this.deleteRoutes();
  }
  getRoutes() {
    this.router.get("/getalluser", UserController.getalluser);
    this.router.get(
        "/getuserbyid/:id",
        UserValidators.getuserbyid(),
        GlobalMiddleware.checkError,
        UserController.getuserbyid,
        );
  }
  postRoutes() {
    this.router.post(
      "/signup",

      UserValidators.signup(),
      GlobalMiddleware.checkError,
      UserController.signup
    );

    this.router.post(
      "/login",
      UserValidators.login(),
      GlobalMiddleware.checkError,
      UserController.login
    );
  }

  patchRoutes() {
    this.router.patch(
        "/edituser/:id",
        UserValidators.edituser(),
        GlobalMiddleware.checkError,
        UserController.edituser);
  }

  deleteRoutes() {
    this.router.delete(
      "/delete/:id",
      UserValidators.delete(),
      GlobalMiddleware.checkError,
      UserController.delete
    );
  }
}

export default new UserRouter().router;
