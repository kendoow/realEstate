import { Router } from "express";
import FiltersController from "../controllers/filtersController.js";

const filtersRouter = new Router()

filtersRouter.get('/:id', FiltersController.get)
filtersRouter.put('/:id', FiltersController.update)
filtersRouter.post('/:id', FiltersController.create)
filtersRouter.delete('/:id', FiltersController.delete)

export default filtersRouter;