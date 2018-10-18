const reviewScan = require('./libs/reviewScan')
const { newReviewQ, reviewApprovedQ } = require('./config/redis')
const knex = require('./config/database')

newReviewQ.on("message", async (msg, next, id) => {
  const review = JSON.parse(msg)
  console.log('Message received.', review)

  if (!review.text) return next() 

  const hasOffensiveWords = reviewScan(review.text)
  if (!hasOffensiveWords) {
    try {
      await knex('productreview')
        .where('ProductReviewID', '=', review.reviewId)
        .update({ approved: '1' })

      reviewApprovedQ.send(msg)

      console.log('Review has been approved.')
    } catch (e) {
      console.log('Error:', e)
    }
  } else {
    console.log('Review contains forbidden words.')
  }

	next()
})

newReviewQ.start()
console.log('Worker is waiting for new messages!')
