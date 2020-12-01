import { model, Schema } from 'mongoose';
import IProduct from '../../types/models/productModelType';

const productSchema = new Schema({
  name: { type: String, required: true },
  reference: { type: String, required: true },
  'part-number': { type: String },
  ean: { type: Number },
  price: { type: Number },
  stock: { type: Number },
  'product-status': { type: Boolean },
  images: { type: [String] },
  'general-specs': { type: [String] },
  shortDescription: { type: String },
  generalDescription: { type: String },
});

export default model<IProduct>('Product', productSchema, 'products', true);
