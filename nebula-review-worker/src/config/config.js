module.exports = {
  REDIS: process.env.REDIS || 'redis',
  NEW_REVIEW_TOPIC: process.env.NEW_REVIEW_TOPIC || 'new-review-topic',
  REVIEW_APPROVED_TOPIC: process.env.REVIEW_APPROVED_TOPIC || 'review-approved-topic',
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'database'
  }
}
