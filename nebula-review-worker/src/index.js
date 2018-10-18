const { newReviewQ, reviewApprovedQ } = require('./config/redis')

newReviewQ.on("message", (msg, next, id) => {
  const review = JSON.parse(msg)
  console.log('Message received.', review)

	next()
})

newReviewQ.start()
console.log('Worker is waiting for new messages!')
