import { Request, Response } from 'express';

function productController(ProductModel: any) {
  function getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      ProductModel.findById(id, (errorFindProduct: any, product: any) => {
        res.json(product);
      });
    } catch (error) {
      res.send(error);
    }
  }
  return { getProductById };
}

export default productController;
