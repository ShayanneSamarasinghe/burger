const burger = require("../models/burger.js")




function router ( app ){
    app.get("/", async function(req,res){
        console.log(`[GET] getting list of burgers`)
        const available = await burger.getAvailable()
        const devoured = await burger.getDevoured()
        res.render('index', {available, devoured })
    })

    app.get("/devour/:id", async function (req, res){
        const result = await burger.devour(req.params.id)

        res.redirect("/")
    })

    app.post("/", async function (req,res){
        console.log.apply(`[POST] we received this data:`, req.body )
        await burger.add(req.body.burger)

        console.log(`new list of available burgers: `, burger.getAvailable() )
        res.redirect("/");
    })
    

}


module.exports = router 