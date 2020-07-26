let burgers = [
    { id : 0, name: "Cheese Burger", devoured:false},
    { id : 1, name: "Big Macco", devoured:true},

]

function getAvailableBurgers(){
    return burgers.filter(burger => burger.devoured == false )
}

function getDevouredBurgers(){
    return burgers.filter(burger => burger.devoured == true)
}

function addBurger (name){
    burgers.push({ id : Date.now(), name, devoured : false})
}

module.exports = {
    getAvailableBurgers, getDevouredBurgers, addBurger
}