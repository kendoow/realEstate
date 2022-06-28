import userService from "../services/userService.js";

class UserController {
    async registration(req, res, next){
        try {
            const {email,password} = req.body;
            const userData = await userService.registration(email,password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge:30*24*60*60*1000, httpOnly:true})
            return res.json(userData)
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next){
        try {
            
        } catch (e) {
            
        }
    }

    async logout(req, res, next){
        try {
            
        } catch (e) {
            
        }
    }

    async activate(req, res, next){ // надо ли?
        try {
            
        } catch (e) {
            
        }
    }

    async getUsers(req, res, next){ 
        try {
            
        } catch (e) {
            
        }
    }
    
    async refresh(req, res, next){ 
        try {
            
        } catch (e) {
            
        }
    }
}

export default new UserController();