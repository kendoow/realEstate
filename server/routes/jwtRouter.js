import { Router } from "express";
import userConroller from "../controllers/userConroller.js";


const jwtRouter = new Router()

jwtRouter.post('/registration', userConroller.registration)
jwtRouter.post('/login', userConroller.login)
jwtRouter.post('/logout', userConroller.logout)
jwtRouter.get('/activate/:link', userConroller.activate) // хз нужен ли ваще
jwtRouter.get('/refresh', userConroller.refresh)
jwtRouter.get('/users', userConroller.getUsers)

export default jwtRouter;