const RedisSMQ = require("rsmq")

//const  './config/database'
const config = require('./config/config')

const rsmq = new RedisSMQ({
  host: config.REDIS,
  port: 6379,
  ns: 'rsmq'
});

console.log('Worker is waiting for new messages!')

function receiveMessage () {
  rsmq.receiveMessage({ qname: 'reviews-queue' }, (err, resp) => {
    if (!resp || !resp.id) return;

    const message = JSON.parse(resp.message)

    console.log('Message received.', message);
   
    rsmq.deleteMessage({
        qname: 'reviews-queue',
        id: resp.id,
    }, (err, resp) => {
      if (resp === 1) console.log('Message deleted.');
    });
  });
}

setInterval(receiveMessage, 1000);
