// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

