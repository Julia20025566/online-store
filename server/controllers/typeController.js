const {Type, Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const {name} = req.body
        await Type.destroy({where: {name: req.body.name}})
        return res.json({name})
    }

}

module.exports = new TypeController()
