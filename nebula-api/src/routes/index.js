const { Router } = require('express')

const healthyRoute = require('./healthy.route')
const reviewsRoute = require('./reviews.route')

const router = new Router()

router.use('/healthy', healthyRoute)
router.use('/reviews', reviewsRoute)

module.exports = router
