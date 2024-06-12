const { ConnectionPool } = require('tedious');

const config = {
  authentication: {
    options: {
      userName: 'SA',
      password: 'azumi123',
    },
    type: 'default',
  },
  server: 'localhost',
  options: {
    database: 'article',
    port: 14033,
    encrypt: true,
    rowCollectionOnRequestCompletion: true,
  },
};

const pool = new ConnectionPool(config);

pool.on('error', err => {
  console.error('Database error:', err);
});

module.exports = pool;
