const RSMQWorker = require("rsmq-worker")
const config = require('./config')

const redisConfig = {
  host: config.REDIS,
  redisPrefix: 'rsmq'
}

const newReviewQ = new RSMQWorker(
  config.NEW_REVIEW_TOPIC,
  redisConfig
);

const reviewApprovedQ = new RSMQWorker(
  config.REVIEW_APPROVED_TOPIC,
  redisConfig
);


module.exports = {
  newReviewQ,
  reviewApprovedQ
}
