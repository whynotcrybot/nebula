module.exports = {
  PORT: process.env.PORT || 3000,
  REDIS: process.env.REDIS || 'redis',
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'database'
  }
}
