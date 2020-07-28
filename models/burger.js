let burgers = [
    { id : 0, name: "Cheese Burger", devoured:false},
    { id : 1, name: "Big Macco", devoured:true},

]

function getAvailable(){
    return burgers.filter(burger => burger.devoured == false )
}

function getDevoured(){
    return burgers.filter(burger => burger.devoured == true)
}

function add (name){
    burgers.push({ id : Date.now(), name, devoured : false})
}

function devour (id){

}

module.exports = {
    getAvailable, getDevoured, add, devour
}