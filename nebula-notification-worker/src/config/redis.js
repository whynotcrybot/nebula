const RSMQWorker = require("rsmq-worker")
const config = require('./config')

const redisConfig = {
  host: config.REDIS,
  redisPrefix: 'rsmq'
}

const reviewApprovedQ = new RSMQWorker(
  config.REVIEW_APPROVED_TOPIC,
  redisConfig
);


module.exports = {
  reviewApprovedQ
}
