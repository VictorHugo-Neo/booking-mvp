require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql', // ou 'pg'
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }
};