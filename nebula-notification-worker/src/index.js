const sendEmail = require('./libs/sendEmail')
const { reviewApprovedQ } = require('./config/redis')

const EMAIL_TEXT = 'Your review has been approved.'

reviewApprovedQ.on('message', (msg, next, id) => {
  const review = JSON.parse(msg)
  console.log('Message received.', review)

  if (!review.text) return next() 
  sendEmail(review.email, EMAIL_TEXT)

	next()
})

reviewApprovedQ.start()
console.log('Worker is waiting for new messages!')
