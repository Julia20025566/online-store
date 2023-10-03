const {Basket} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
        const userId = req.body.userId
        const type = await Basket.create({userId})
        return res.json(type)
    }
    async delete(req, res) {
        const userId = Number(req.body.userId)
        await Basket.destroy({where: {userId: userId}})
        return res.json({userId})
    }

}

module.exports = new BasketController()
