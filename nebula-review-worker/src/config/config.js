module.exports = {
  REDIS: process.env.REDIS || 'redis',
  NEW_REVIEW_TOPIC: process.env.NEW_REVIEW_TOPIC || 'new-review-topic',
  REVIEW_APPROVED_TOPIC: process.env.REVIEW_APPROVED_TOPIC || 'review-approved-topic',
}
