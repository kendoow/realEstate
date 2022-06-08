import { Router } from "express";
import ProductsController from "../controllers/productsController.js";


const productRouter = new Router()


productRouter.get('/product', ProductsController.getAll)
productRouter.get('/product/:id', ProductsController.getOne)
productRouter.post('/product/:id', ProductsController.create)
productRouter.put('/product', ProductsController.update)
productRouter.delete('/product/:id', ProductsController.delete)

export default productRouter;