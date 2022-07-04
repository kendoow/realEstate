import userService from "../services/userService.js";
import { validationResult } from "express-validator/src/validation-result.js";
import { ApiError } from "../exceptions/apiError.js";
class UserController {
    async registration(req, res, next){
        try {
            const errors = validationResult(req); // validation 
            if(!errors.isEmpty()){ // check if errors isn't empty -> use middleware for errors
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email,password} = req.body;
            const userData = await userService.registration(email,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true}) // 30d for refresh in cookie
            return res.json(userData)
        } catch (e) {
           next(e);
        }
    }

    async login(req, res, next){
        try {
            const {email,password} = req.body;
            const userData = await userService.login(email,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true}) // 30d for refresh in cookie
            return res.json(userData)
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next){
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken');
            return res.json(token)
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next){ // надо ли?
        try {
            
        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next){ 
        try {
            const users = await userService.getAllUsers();
            return res.json(users)
        } catch (e) {
            next(e);
        }
    }
    
    async refresh(req, res, next){ 
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true}) // 30d for refresh in cookie
            return res.json(userData)
        } catch (e) {
            next(e);
        }
    }
}

export default new UserController();