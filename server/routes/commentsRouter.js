import { Router } from "express";
import CommentsController from "../controllers/commentsController.js";


const commentsRouter = new Router()

commentsRouter.get('/:id', CommentsController.getOne)
commentsRouter.post('/:id', CommentsController.create)
commentsRouter.put('/:id', CommentsController.update)

export default commentsRouter;