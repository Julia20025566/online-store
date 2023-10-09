const { Device, BasketDevice, Basket } = require("../models/models")
const {logger} = require("sequelize/lib/utils/logger");

class BasketController {
    // ------ CRUD корзины ------ //

    async addToBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        console.log(user.id)
        console.log("hello")
        console.log(deviceId)
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async delFromBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        console.log(user.id)
        console.log("hello")
        console.log(deviceId)
        const basket = await BasketDevice.destroy({where:{ basketId : user.id, deviceId : deviceId}})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }

}

module.exports = new BasketController()