import * as Multer from "multer";
export declare class Utils {
    multer: Multer.Multer;
    static encryptPassword(password: string): Promise<any>;
    static comparePassword(password: {
        plainPassword: string;
        encryptedPassword: string;
    }): Promise<any>;
}
