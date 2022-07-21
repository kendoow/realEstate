import * as bcrypt from 'bcrypt';

import tokenService from "./tokenService.js";
import productUserService from './productUserService.js';

import userModel from "../models/userModel.js";

import UserDto from "../dtos/userDto.js";

import { ApiError } from "../exceptions/apiError.js";


class UserService{
    async registration(email, password, name) {
        const candidate = await userModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует `)
        }
        

        const hashedPassword = await bcrypt.hash(password, 3)        
        const user = await userModel.create({name, email, password: hashedPassword})
       
        const userDto = new UserDto(user) // id, email

        const tokens = tokenService.generateTokens({...userDto}) // 2 tokens(refresh and access)
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        await productUserService.create(userDto.id)
        return {
            ...tokens,
            user: userDto
        }
    }

    async login(email,password) {
        const user = await userModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const isPassedEquals = await bcrypt.compare(password, user.password);
        if(!isPassedEquals){
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user);

        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token;
    } 
    
    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }

        const user = await userModel.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            user: userDto
        }
    }

    async userUpdate(refreshToken, user) {
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }

        const userUpdated = await userModel.findByIdAndUpdate(userData.id, user, { new: true })
        const userDto = new UserDto(userUpdated)

        return {
            ...userDto,
        }
    }

    async userUpdatePassword(refreshToken, passwordCurrent, passwordNew) {
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }

        const user = await userModel.findById(userData.id)
        const isPassedEquals = await bcrypt.compare(passwordCurrent, user.password);

        if(!isPassedEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const hashedPassword = await bcrypt.hash(passwordNew, 3)        

        await userModel.findByIdAndUpdate(userData.id, { password: hashedPassword }, { new: true })
    }

    async getAllUsers(){
        const users = await userModel.find(); // return all posts from bd
        return users;
    }
}

export default new UserService();