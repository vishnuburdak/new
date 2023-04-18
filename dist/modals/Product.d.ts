import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    product_name: string;
    product_price: string;
    product_pic_url: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default _default;
