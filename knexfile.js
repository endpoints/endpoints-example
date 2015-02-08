const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: ":memory:"
    },
    directory: path.resolve(__dirname, '/migrations'),
    migrations: {
      tableName: 'migrations'
    }
  }
};
