module.exports = {
  client: 'sqlite3',
  debug: true,
  connection: {
    filename: 'dev.db'
  },
  pool: {
    afterCreate: function (conn, cb) {
      conn.run('PRAGMA foreign_keys = ON', cb);
    }
  }
};
