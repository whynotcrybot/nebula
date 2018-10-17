const { Router } = require('express')
const healthy = require('../controllers/healthy.controller')

const router = new Router()

router.get('/', healthy.isHealthy)

module.exports = router
