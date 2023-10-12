const {Type, Brand, Device} = require('../models/models')
const ApiError = require('../error/ApiError');
const {logger} = require("sequelize/lib/utils/logger");

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

    async update(req, res) {
        const {name} = req.body
        console.log(name)
        const {id} = req.params
        console.log(id)
        const type = await Type.findByPk(Number(id))
        await type.update({name: name})
        return res.json({type})
    }

}

module.exports = new TypeController()
