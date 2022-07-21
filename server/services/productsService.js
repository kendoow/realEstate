import CommentsModel from "../models/commentsModel.js";
import FiltersModel from "../models/filtersModel.js";
import ProductsModel from "../models/productsModel.js";
import FilesService from "./filesService.js";
import FiltersService from "./filtersService.js";

class ProductsService {
    async getAll() {
        const products = await ProductsModel.find()
        return products
    }

    async getPagination(page, limit) {
        const products = await ProductsModel.find().limit(page * limit)
        return products
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Products Service Get One - нет id')
        }
        const product = await ProductsModel.findById(id)
        return product
    }   

    async create(image, product) {
        const imageNameArray = image.map(img => FilesService.uploadFile(img)) 
        const createdProduct = await ProductsModel.create({...product, image: imageNameArray})

        await CommentsModel.create({productId: createdProduct._id})
        await FiltersModel.create({ productId: createdProduct._id})
        return createdProduct
    }

    async update(id, product) {
        if (!id) {
            throw new Error('Error - Products Service Update нет id')
        }
        const updatedProduct = await ProductsModel.findByIdAndUpdate(id, product, {new: true})
        return updatedProduct
    }

    async delete(id) {
        if (!id) {
            throw new Error('Error - Products Service Delete нет id')
        }

        const deletedProduct = await ProductsModel.findByIdAndDelete(id)
        return deletedProduct
    }
}

export default new ProductsService();