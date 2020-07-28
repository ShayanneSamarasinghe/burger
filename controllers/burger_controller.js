const burger = require("../models/burger.js")



function router ( app ){
    app.get("/", function(req,res){
        console.log(`[GET] getting list of burgers`)
        res.render('burger_list', 
        {
            available:burger.getAvailable(), 
            devoured:burger.getDevoured()
        })
    })

    app.get("/delete/:id", function (req, res){
        const result = burger.delete(req.params.id)

        res.redirect("/")
    })

    app.post("/", function (req,res){
        console.log.apply(`[POST] we received this data:`, req.body )
        burger.add(req.body.burger)

        console.log(`new list of available burgers: `, burger.getAvailable() )
        res.redirect("/");
    })
    

}


module.exports = router 