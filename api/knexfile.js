require('dotenv').config()

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || 'postgres://usuario:senha@localhost:5432/booking_db',
        migrations:{
            directory: './src/database/migrations'
        }
    }
}