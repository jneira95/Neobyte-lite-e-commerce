function productController(ProductModel:any) {
  async function getProductById(req: any, res: any) {
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
