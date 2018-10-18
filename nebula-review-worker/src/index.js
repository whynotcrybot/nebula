const RSMQWorker = require( "rsmq-worker" )

//const  './config/database'
const config = require('./config/config')

const worker = new RSMQWorker(
  config.NEW_REVIEW_TOPIC,
  {
    host: config.REDIS,
    redisPrefix: 'rsmq'
  }
);

console.log('Worker is waiting for new messages!')

worker.on( "message", ( msg, next, id ) => {
  const message = JSON.parse(msg)
  console.log('Message received.', message);

	next()
})

worker.start()
