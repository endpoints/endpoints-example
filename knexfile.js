const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./db.sqlite"
    },
    directory: path.resolve('./migrations'),
    migrations: {
      tableName: 'migrations'
    }
  }
};
