// create an express app
const express = require("express")
const app = express()

// use the express-static middleware to connect to public
app.use(express.static("public"))

