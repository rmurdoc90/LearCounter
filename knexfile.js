// Update with your config settings.

const { pgConnection } = require("./config/vars")

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 's115115744'
    },
    migrations: {
      directory: "./database/migrations",
    },
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
    directory: "./database/migrations",
    },
  }

};
