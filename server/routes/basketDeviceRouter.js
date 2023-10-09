const Router = require('express')
const router = new Router()
const basketDeviceController = require('../controllers/basketDeviceController')

router.post('/', basketDeviceController.create)
router.delete('/', basketDeviceController.delete)


module.exports = router
