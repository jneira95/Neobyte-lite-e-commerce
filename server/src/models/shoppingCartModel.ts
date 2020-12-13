import { model, Schema } from 'mongoose';
import IShoppingCart from '../../types/models/shoppingCartModelType';

const shoppingCartSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model<IShoppingCart>('ShoppingCart', shoppingCartSchema, 'shoppingcarts', true);
