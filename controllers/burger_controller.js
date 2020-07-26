const burger = require("../models/burger.js")



function router (app){
    app.post("/", function (req,res){
        console.log.apply(`[POST] we received this data:`, req.body )
        burger.add(req.body.burger)
        
        res.redirect("/");
    })
    

}


module.exports = router 