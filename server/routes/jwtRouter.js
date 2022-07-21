import { Router } from "express";
import userConroller from "../controllers/userConroller.js";
import { body } from "express-validator";
import authMiddleware from "../middlewares/authMiddleware.js";

const jwtRouter = new Router()

jwtRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userConroller.registration)
jwtRouter.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    userConroller.login)

jwtRouter.post('/logout', userConroller.logout)
jwtRouter.get('/activate/:link', userConroller.activate) // хз нужен ли ваще
jwtRouter.get('/refresh', userConroller.refresh)

// jwtRouter.get('/users', authMiddleware, userConroller.getUsers)
jwtRouter.put('/users', userConroller.userUpdate)
jwtRouter.put('/users/password', userConroller.userUpdatePassword)

export default jwtRouter;