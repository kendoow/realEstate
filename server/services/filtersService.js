import FiltersModel from "../models/filtersModel.js";
import ProductsService from "./productsService.js";


class FiltersService {
    async getAll(productFilters) {
        try {
            // Избавляемся от фильтров false {wifi: false, rooms: 'Неважно'} -> {}
            const productFiltersTrue = Object.fromEntries(Object.entries(productFilters).filter(([_, v]) => v !== 'false'
                && v !== 'Неважно'))

            const filters = await FiltersModel.find()
            // Формумируем массив фильтров которые совпадают с productFiltersTrue
            const isTrueFiltersArray = filters.map(filter => Object.entries(filter['_doc'])
                .filter(([key, v]) => {
                    if (typeof v === 'string') {
                        if (key === 'price'
                            && productFiltersTrue[key]
                            && +productFiltersTrue[key].split(' ')[0] <= +v
                            && +productFiltersTrue[key].split(' ').pop() >= +v) return v
                        if (productFiltersTrue[key] === v) return v
                    } else {
                        if (!!productFiltersTrue[key] === v) return v
                    }
                }))

            // Получаем Set productId (продукты которые нам нужны)
            const ProductsIdSet = new Set(filters.map((filter, i) => {
                if (isTrueFiltersArray[i].length === Object.keys(productFiltersTrue).length) return String(filter.productId)
            }).filter(v => v))

            const products = await ProductsService.getAll()

            return products.filter(v => ProductsIdSet.has(String(v._id)))
        } catch (e) {
            throw e;
        }
    }

    async create(productId, productFilters) {
        try {
            const createdFilters = await FiltersModel.create({ productId, ...productFilters })
            return createdFilters
        } catch (e) {
            throw e;
        }
    }

    async update(productId, productFilters) {
        try {
            const updatedFilters = await FiltersModel.findOneAndUpdate({ productId }, { productId, ...productFilters })
            return updatedFilters
        } catch (e) {
            throw e;
        }
    }

    async delete(productId) {
        try {
            const deletedFilters = await FiltersModel.findOneAndDelete({ productId })
            return deletedFilters
        } catch (e) {
            throw e;
        }
    }
}

export default new FiltersService;