const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketDeviceController {
    async create(req, res) {
        const deviceId = Number(req.body.deviceId)
        const basketId = Number(req.body.basketId)
        const type = await BasketDevice.create({deviceId: deviceId, basketId: basketId})
        return res.json(type)
    }
    async delete(req, res) {
        const deviceId = Number(req.body.deviceId)
        const basketId = Number(req.body.basketId)
        let device = await BasketDevice.destroy({where: {deviceId: deviceId, basketId: basketId}})
        return res.json({device})
    }

    async get(req, res) {
        const basketId = Number(req.body.basketId)
        let basket = await BasketDevice.findAll({where: {basketId: basketId}})
        return res.json(basket)
    }
}

module.exports = new BasketDeviceController()
