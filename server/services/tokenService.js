import jwt from 'jsonwebtoken'
import TokenModel from '../models/TokenModel.js'
class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS, {expiresIn: '1h'})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token,process.env.JWT_ACCESS)
            return userData;
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token,process.env.JWT_REFRESH)
            return userData;
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user:userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await TokenModel.create({user:userId, refreshToken}) 
        return token;
    }

    async removeToken(refreshToken){
        const tokenData = await TokenModel.deleteOne({refreshToken})
        return tokenData;
    }

    async findToken(refreshToken){
        const tokenData = await TokenModel.findOne({refreshToken})
        return tokenData;
    }
}

export default new TokenService();