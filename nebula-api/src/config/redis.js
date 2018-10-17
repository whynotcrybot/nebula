const RedisSMQ = require("rsmq")
const config = require('./config')

const rsmq = new RedisSMQ({
  host: config.REDIS,
  port: 6379,
  ns: 'rsmq'
});

module.exports = async (app) => {
  app.set('redis', rsmq)

  rsmq.createQueue({ qname: config.NEW_REVIEW_TOPIC }, (err, resp) => {
    if (resp === 1) console.log('Reviews queue initialized.')
  })
}

