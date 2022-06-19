import { Router } from "express";
import ProductsController from "../controllers/productsController.js";


const productRouter = new Router()


productRouter.get('', ProductsController.getAll)
productRouter.get('/:id', ProductsController.getOne)
productRouter.post('', ProductsController.create)
productRouter.put('/:id', ProductsController.update)
productRouter.delete('/:id', ProductsController.delete)

export default productRouter;