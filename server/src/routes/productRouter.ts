import { Router } from 'express';
import productController from '../controllers/products/productController';

function productRouter(productModel: any) {
  const router = Router();
  const products = productController(productModel);

  router.route('/')
    .get(products.getProductById);

  return router;
}

export default productRouter;
