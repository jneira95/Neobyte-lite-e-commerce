import { Request, Response } from 'express';

function productController(ProductModel: any) {
  function getProductById(req: Request, res: Response) {
    try {
      const query = req.body;
      ProductModel.findOne(query, (errorFindProduct: any, product: any) => {
        res.json(product);
      });
    } catch (error) {
      res.send(error);
    }
  }
  return { getProductById };
}

export default productController;
