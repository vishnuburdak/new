import User from "../modals/User";
import { Utils } from "../utils/Utils";
import * as Jwt from "jsonwebtoken";
import { getEnvironmentVariables } from "../environments/env";


export class UserController {
    static async signup(req, res, next) {
      const email = req.body.email;
      const first_name = req.body.first_name;
      const last_name = req.body.last_name;
      const password = req.body.password;
      const contact = req.body.phone;
  
      try {
        const hash = await Utils.encryptPassword(password);
  
        const data = {
          email,
          password: hash,
          first_name,
          last_name,
          phone: contact,
        };
  
        let user = await new User(data).save();
        res.send(user);
      } catch (error) {
        next(error);
      }
    }



    static async edituser(req, res, next) {
    
        const userid = req.params.id
  
        const email = req.body.email;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const password = req.body.password;
        const contact = req.body.phone;
  
        try {
          
          let user = await User.findOneAndUpdate({_id:userid},{ email:email,
            password:password,
            first_name:first_name,
            last_name:last_name,
            phone: contact,},{new:true});
    
          res.send(user);
        } catch (error) {
          next(error);
        }
      }


  
    static async getalluser(req, res, next) {
      try {
        const data = await User.find({});
        res.send(data);
      } catch (error) {
        next(error);
      }
    }
  
    static async login(req, res, next) {
      const password = req.body.password;
      const user = req.user;
      try {
        await Utils.comparePassword({
          plainPassword: password,
          encryptedPassword: user.password,
        });
  
        const token = Jwt.sign(
          { email: user.email, user_id: user._id },
          getEnvironmentVariables().jwt_secret,
          { expiresIn: "120d" }
        );
  
        const data = { token: token, user: user };
        res.json(data);
      } catch (e) {
        next(e);
      }
    }
  
    static async delete(req, res, next) {
      const deleteuser = req.user;
      try {
        const deleteduser = await deleteuser.remove();
        res.send(deleteduser);
      } catch (error) {
        next(error);
      }
    }

    static async getuserbyid(req, res, next) {
        const user = req.user;
        try {
          res.send(user);
        } catch (error) {
          next(error);
        }
      }

      
  }
  