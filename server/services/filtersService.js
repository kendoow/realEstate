import FiltersModel from "../models/filtersModel.js";


class FiltersService {
    async get(productId) {
        try {
            const filters = await FiltersModel.findOne({productId}) 
            return filters
        } catch (e) {
            throw e;        
        }
    }

    async create(productId) {
        try {
            const createdFilters = await FiltersModel.create({productId})
            return createdFilters
        } catch (e) {
            throw e;        
        }
    }

    async update(productId, productFilters) {
        try {
            const updatedFilters = await FiltersModel.findOneAndUpdate({productId}, {productId, ...productFilters})
            return updatedFilters
        } catch (e) {
            throw e;        
        }
    }

    async delete(productId) {
        try {
            const deletedProduct = await FiltersModel.findOneAndDelete({productId})
            return deletedProduct
        } catch (e) {
            throw e;        
        }
    }
}

export default new FiltersService;