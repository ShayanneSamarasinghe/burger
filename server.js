require("dotenv").config() // looks for .env ; process.env gets initialized 

const express = require("express")
const exphbs = require("express-handlebars")
const burger = require("./models/burger")
const routerController = require("./controllers/burger_controller.js")
const app = express()
// handlebar initilization 
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;


routerController(app)
// app.use(routes)

app.use (express.static("public"))


app.listen(PORT, function(){
    console.log(`Listening on port:${PORT}`)
})