import FiltersService from "../services/filtersService.js"


class FiltersContoller {
    async get(req, res) {
        try {
            const filters = await FiltersService.get(req.params.id)
            res.json(filters)
        } catch (e) {
            res.status(400).json(`Filters Error - get ${e}`)
        }
    }

    async create(req, res) {
        try {
            const filtersCreated = await FiltersService.create(req.params.id)
            res.json(filtersCreated)
        } catch (e) {
            res.status(400).json(`Filters Error - create ${e}`)
        }
    }

    async update(req, res) {
        try {
            const filtersUpdated = await FiltersService.update(req.params.id, req.body)
            res.json(filtersUpdated)
        } catch (e) {
            res.status(400).json(`Filters Error - update ${e}`)
        }
    }

    async delete(req, res) {
        try {
            const filtersDeleted = await FiltersService.delete(req.params.id)
            res.json(filtersDeleted)
        } catch (e) {
            res.status(400).json(`Filters Error - delete ${e}`)
        }
    }
}

export default new FiltersContoller;