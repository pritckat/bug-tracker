require('dotenv').config()
const express = require('express')

const app = express();

//Middleware
app.use(express.json())

//Routes

//Error Handler

const PORT = process.env.Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))