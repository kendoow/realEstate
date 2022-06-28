import userModel from "../models/userModel.js";
import * as bcrypt from 'bcrypt';
import tokenService from "./tokenService.js";
import UserDto from "../dtos/userDto.js";

class UserService{
    async registration(email,password){
        const user = await userModel.findOne({email})
        if(user){
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует `)
        }
       

        const hashedPassword = await bcrypt.hash(password, 3)        
        const newUser = await userModel.create({email, password: hashedPassword})
       
        const userDto = new UserDto(newUser) // id, email

        const tokens = tokenService.generateTokens({...userDto}) // 2 tokens(refresh and access)
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {
            ...tokens,
            newUser:userDto
        }
    }
}

export default new UserService();