const config = require('./config')

const knex = require('knex')({
  client: 'mysql',
  version: '5.6',
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  }
})

module.exports = (app) => {
  app.set('knex', knex)
}
