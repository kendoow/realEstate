import ProductUserService from "../services/productUserService.js";

class ProductUserController {
    async getAll(req, res) {
        try {
            const products = await ProductUserService.getAll(req.params.id)
            res.json(products) 
        } catch (e) {
            res.status(400).json({message: `Product User Controller - getAll - ${e}`})
        }
    }

    async create(req, res) {
        try {
            const productCreated = await ProductUserService.create(req.params.id)
            res.json(productCreated)
        } catch (e) {
            res.status(400).json({message: `Product User Controller - create - ${e}`})            
        }
    }

    async update(req, res) {
        try {
            const productUpdated = await ProductUserService.update(req.params.id, req.body)
            res.json(productUpdated)
        } catch (e) {
            res.status(400).json({message: `Product User Controller - update - ${e}`})
        }
    }

    async delete(req, res) {
        try {
            const productRemevod = await ProductUserService.delete(req.params.id)
            res.json(productRemevod)
        } catch (e) {
            res.status(400).json({message: `Product User Controller - delete - ${e}`})
        }
    }

}

export default new ProductUserController;