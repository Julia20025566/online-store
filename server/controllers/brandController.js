const {Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const {rows} = require("pg/lib/defaults");

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const {name} = req.body
        await Brand.destroy({where: {name: req.body.name}})
        return res.json({name})
    }

    async update(req, res) {
        const {name} = req.body
        console.log(name)
        const {id} = req.params
        const type = await Brand.findByPk(Number(id))
        await type.update({name: name})
        return res.json({type})
    }
}

module.exports = new BrandController()
