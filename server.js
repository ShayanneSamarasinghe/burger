const express = require("express")
const exphbs = require("express-handlebars")
const orm = require("./models/orm")
const routes = require("./controllers/burgerControllers.js")
const app = express()


app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use (express.static("public"))

app.use(routes)

app.listen(PORT, function(){
    console.log("Listeing on port:%s",PORT)
})