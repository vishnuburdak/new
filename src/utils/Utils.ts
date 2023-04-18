import * as Bcrypt from "bcrypt";
import * as Multer from "multer";
import multer = require("multer");

const storageOptions = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/images/");
  },  
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export class Utils {
  public multer = Multer({ storage: storageOptions, fileFilter: filefilter });

  static encryptPassword(password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  }

  static async comparePassword(password: {
    plainPassword: string;
    encryptedPassword: string;
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      Bcrypt.compare(
        password.plainPassword,
        password.encryptedPassword,
        (err, isSame) => {
          if (err) {
            reject(err);
          } else if (!isSame) {
            reject(new Error("Password Does not Match"));
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}
