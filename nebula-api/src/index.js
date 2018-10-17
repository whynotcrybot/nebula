const express = require('express')

//const  './config/database'
const middlewares = require('./config/middlewares')
const config = require('./config/config')
const routes = require('./routes')

const app = express()
middlewares(app)

app.use('/api', routes)

if (!module.parent) {
  app.listen(config.PORT, err => {
    if (err) console.error('Error occured', err)
    else {
      console.log(
        `
          Listening on port: ${config.PORT}
          Environment: ${process.env.NODE_ENV}
        `,
      )
    }
  })
}

module.exports = app
