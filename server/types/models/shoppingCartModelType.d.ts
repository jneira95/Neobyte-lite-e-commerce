import { Document } from 'mongoose';

interface ShoppingCartModel {
  createAt: number;
}

interface IShoppingCart extends ShoppingCartModel, Document {}

export default IShoppingCart;
