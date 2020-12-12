import { Request, Response } from 'express';

function shoppingCartController(ShoppingCartModel: any) {
  function getCart(req: Request, res: Response) {
    ShoppingCartModel.find({});
    return res;
  }
  return { getCart };
}

export default shoppingCartController;
