import TokenService from "./tokenService.js";

import ProductsUserModel from "../models/productsUser.js";
import TokenModel from "../models/TokenModel.js";
import UserModel from "../models/userModel.js";

class ProductUserService {
    async getAll(userId) {
        try {
            if (!userId) {
                throw new Error('Product User Service - getAll нет userId')
            }

            const User = await UserModel.findById(userId)
            const { refreshToken } = await TokenModel.findOne({user: userId})
            const userData = TokenService.validateRefreshToken(refreshToken)
            if (!User || !refreshToken || userData.id !== userId) {
                throw new Error('Product User Service - getAll такой пользователь не зарегистрирован')
            }

            const products = await ProductsUserModel.findOne({userId})
            return products
        } catch (e) {
            throw e;
        }
    }
    
    async create(userId) {
        try {
            if (!userId) {
                throw new Error('Product User Service - create нет userId')
            }

            const User = await UserModel.findById(userId)
            const { refreshToken } = await TokenModel.findOne({userId})
            const userData = TokenService.validateRefreshToken(refreshToken)
            if (!User || !refreshToken || userData.id !== userId) {
                throw new Error('Product User Service - getAll такой пользователь не зарегистрирован')
            }


            const productCreated = await ProductsUserModel.create({userId})
            return productCreated
        } catch (e) {
            throw e;
        }
    }


    async update(userId, products) { // { favourites: [...]}
        try {
            if (!userId) {
                throw new Error('Product User Service - update нет userId')
            }
            if (!Object.keys(products).length) {
                throw new Error('Product User Service - update нет product')
            }

            const User = await UserModel.findById(userId)
            const { refreshToken } = await TokenModel.findOne({userId})
            const userData = TokenService.validateRefreshToken(refreshToken)
            if (!User || !refreshToken || userData.id !== userId) {
                throw new Error('Product User Service - getAll такой пользователь не зарегистрирован')
            }

            const productUpdated = await ProductsUserModel.findOneAndUpdate({userId, ...products})
            return productUpdated
        } catch (e) {
            throw e;
        }
    }

    async delete(userId) {
        try {
            if (!userId) {
                throw new Error('Product User Service - de;ete нет userId')
            }

            const User = await UserModel.findById(userId)
            const { refreshToken } = await TokenModel.findOne({userId})
            const userData = TokenService.validateRefreshToken(refreshToken)
            if (!User || !refreshToken || userData.id !== userId) {
                throw new Error('Product User Service - getAll такой пользователь не зарегистрирован')
            }

            const productRemoved = await ProductsUserModel.findOneAndRemove({userId})
            return productRemoved
        } catch (e) {
            throw e;
        }
    }
}

export default new ProductUserService;