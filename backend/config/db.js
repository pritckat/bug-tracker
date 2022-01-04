const mongoose = require('mongoose')

const connString = process.env.DB_CONNECT
const connectDB = async () => {
    try {
        await mongoose.connect(connString, {})
        console.log('Connected to DB')
    } catch (err) {
        console.log('did not connect to db', err)
        process.exit(1)
    }
}

module.exports = connectDB