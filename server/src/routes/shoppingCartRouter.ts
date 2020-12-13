import { Router } from 'express';
import shoppingCartController from '../controllers/carts/shoppingCartController';
import shoppingCartValidator from '../validator/shoppingCartValidator';

function shoppingCartRouter(shoppingCartModel: any, UserModel: any) {
  const router = Router();
  const shoppingCarts = shoppingCartController(shoppingCartModel, UserModel);

  router.route('/')
    .post(shoppingCartValidator, shoppingCarts.userShoppingCart);

  return router;
}

export default shoppingCartRouter;
