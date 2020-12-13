import { model, Schema } from 'mongoose';
import IShoppingCart from '../../types/models/shoppingCartModelType';

const shoppingCartSchema = new Schema({
  // _id: { type: String },
  nbtotalproducts: { type: Number },
  price: { type: Number },
  'price-float': { type: Number },
  'shipping-price': { type: Number },
  products: { type: [Object] },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model<IShoppingCart>('ShoppingCart', shoppingCartSchema, 'shoppingcarts', true);
