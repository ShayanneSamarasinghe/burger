
const orm = require ('../config/orm')

// let burgers = [
//     { id : 0, name: "Cheese Burger", devoured:false},
//     { id : 1, name: "Big Macco", devoured:true},

// ]

function getAvailable(){
    return orm.selectAll(false)

}

function getDevoured(){
    return orm.dbList(true)
    return burgers.filter(burger => burger.devoured == true)
}

function add (name){
    return orm.dbInsert(name)
    // burgers.push({ id : Date.now(), name, devoured : false})
}

function devour (id){
    return orm.dbUpdate (id)
//     const idx = burgers.findIndex(burger => burger.id == id)
//     // mark the burger as devoured //
//     burgers[idx].devoured = true 
}

module.exports = {
    getAvailable, getDevoured, add, devour
}