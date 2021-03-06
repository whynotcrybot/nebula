const { Router } = require('express')
const reviews = require('../controllers/reviews.controller')

const router = new Router()

router.get('/', reviews.getReviews)
router.post('/', reviews.addReview)

module.exports = router
