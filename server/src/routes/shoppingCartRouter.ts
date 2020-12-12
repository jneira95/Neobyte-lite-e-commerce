import { Router } from 'express';
import shoppingCartController from '../controllers/carts/shoppingCartController';

function shoppingCartRouter(shoppingCartModel: any) {
  const router = Router();
  const shoppingCarts = shoppingCartController(shoppingCartModel);

  router.route('/')
    .get(shoppingCarts.getCart);

  return router;
}

export default shoppingCartRouter;
