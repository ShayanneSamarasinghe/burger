const burger = require("../models/burger.js")



function router (app){
    app.post("/", function (req,res){
        console.log.apply(`[POST] we received this data:`, req.body )
        res.redirect("/");
    })
    

}


module.exports = router 