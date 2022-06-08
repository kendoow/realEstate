import ProductsService from "../services/productsService.js";

class ProductsController {
  async getAll(req, res) {
    try {
      const products = await ProductsService.getAll();
      res.json(products);
    } catch (e) {
      res.status(400).json({ message: "Error - Products Controller getAll" });
    }
  }

  async getOne(req, res) {
    try {
      const product = await ProductsService.getOne(req.params.id);
      res.json(product);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Products Controller getOne - ${e}` });
    }
  }

  async create(req, res) {
    try {
      const createdProduct = await ProductsService.create(
        req.files.image,
        req.body
      );
      res.json(createdProduct);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Products Controller Create - ${e}` });
    }
  }

  async update(req, res) {
    try {
      const updatedProduct = await ProductsService.update(
        req.params.id,
        req.body
      );
      res.json(updatedProduct);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Products Controller Update - ${e}` });
    }
  }

  async delete(req, res) {
    try {
      const deletedProduct = await ProductsService.delete(req.params.id);
      res.json(deletedProduct);
    } catch (e) {
      res
        .status(400)
        .json({ message: `Error - Products Controller Delete - ${e}` });
    }
  }
}

export default new ProductsController();
