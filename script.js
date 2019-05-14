var Car = function (brand, model, tank, consumption) {
    this.brand = brand;
    this.model = model;
    this.tank = 90;
    this.consumption = consumption;
    this.initialFuelLevel = 0;
    this.addedFuel = 60;
    this.endFuelLevel = function (litres) {
        var endFuel = this.initialFuelLevel + this.addedFuel;
        if (endFuel <= this.tank)  {
        return endFuel; }
        else {
           return "bakda yer yoxdur"
        }
    }

}

var Mercedes = new Car("Mercedes", "gClass", 90, 20);
Mercedes.initialFuelLevel = 60;
Mercedes.tank = 90;
console.log(Mercedes.endFuelLevel())

// class Car {
//    constructor () {
//     this.brand = brand;
//     this.model = model;
//     this.tank = 90;
//     this.consumption = consumption;
//     this.initialFuelLevel = 0;
//     this.addedFuel = 60;
//    }
//      endFuel () {
//         this.endFuelLevel = function (litres) {
//         var endFuel = this.initialFuelLevel + this.addedFuel;
//         if (endFuel <= this.tank)  {
//         return endFuel; }
//         else {
//            return "bakda yer yoxdur"
//         }
//     }
//    }
// } 
// var Mercedes = new Car("Mercedes", "gClass", 90, 20);
// Mercedes.initialFuelLevel = 60;
// Mercedes.tank = 90;
// console.log(Mercedes.endFuelLevel())