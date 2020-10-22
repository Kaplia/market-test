const path = require('path');
const rootPath = path.normalize(__dirname + '/../..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'market-test'
    },
    port: process.env.PORT || 3000,
    db: process.env.DB_URL || 'postgres://postgres:test@localhost/market-test-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'market-test'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/market-test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'market-test'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/market-test-production'
  }
};

module.exports = config[env];
