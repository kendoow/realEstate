import { Router } from 'express'

import ProductUserController from '../controllers/productUserController.js'

const productUserRouter = new Router()

productUserRouter.get('/:id', ProductUserController.getAll)
productUserRouter.post('/:id', ProductUserController.create)
productUserRouter.put('/:id', ProductUserController.update)
productUserRouter.delete('/:id', ProductUserController.delete)

export default productUserRouter;