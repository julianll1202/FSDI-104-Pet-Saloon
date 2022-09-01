//object constructor
function Animal(name,food,isTheKingOfJungle){
    this.name = name;
    this.food = food;
    this.isTheKingOfJungle = isTheKingOfJungle;
}

let obj1 = new Animal("Simba","Carnivore",true);
let obj2 = new Animal("Rafiki","Fruits",false);

function Car(nodelName, year, manufacturer, color){
    this.nodelName = nodelName;
    this.year = year;
    this.manufacturer = manufacturer;
    this.color = color;
}

let camaro = new Car("Camaro SS", 1978, "Chevrolet", "Blue");
let firebird = new Car("Firebirdd", 1966, "Pontiac", "Red");

console.table(camaro);