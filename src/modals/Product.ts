import * as mongoose from "mongoose";
import { model } from "mongoose";

const productSchema = new mongoose.Schema(
  {

    product_pic_url: { type: String, required: true},
    product_name: {type: String,required: true},
    product_price: {type: String,required: true},
    
},
  { timestamps: true }
);


export default model("products", productSchema);