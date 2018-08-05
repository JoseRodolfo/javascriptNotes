// OBJECTS
// create an object with two properties and a method
let id ={
  name: "jose",
  last: "perez",
  sayName: function(){
    return "hello all, my name is " + this.name  + " " + this.last;
  }
}
// delete a property from object
// delete id.name

// set new property to an object
// id.car = "Toyota"

// console.log(id.sayName())

// the key word "this" refers to the object the method is in, a method a function within an object property (a property is a name: value, in an object)



// CONSTRUCTORS
// constructors are functions that create "blue prints" for new objects
// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
// Constructors use the keyword "this" to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// Constructors define properties and behaviors instead of returning a value as other functions might.

function Vehicle(){
  this.make =  "Toyota";
  this.model = "Tacoma";
  this.year = "2016"
}

// create a new instance of myVehicle
// let newCar = new Vehicle();


// constructors can also take in parameters
function Vehicle(make, model){
  this.make =  make;
  this.model = model;
  this.year = "2016"
}

// create an object witht the costructor saved in the variable
 // var newCAr = new Vehicle ("Dodge", "Ram")

 // INSTANCEOF
 // instanceOf lets us see if an object created is an instance of a constructors
// newCar instanceOf Vehicle ..... this will return "true" or "false" in console

// own vs prototype properties
// Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.


// Use Prototype Properties to Reduce Duplicate Code
// The prototype is an object that is shared among ALL instances of Bird
// If we had three instances of the Vehicle constructor, we can add a property to all instances by:
// Vehicle.prototype.wheels = 4; then all instances now have this prop.


// iterate over all properties
// checking to see if props are own property of instance, or of Prototype

function Dog(name) {
  this.name = name;      //property of a prototype
}

Dog.prototype.numLegs = 4; //still props of a prototype

let beagle = new Dog("Snoopy"); //new instance

let ownProps = []; //array for own props
let prototypeProps = []; // array for prototype props

// Add your code below this line

for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}
