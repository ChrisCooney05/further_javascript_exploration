//Evaluate these:
//#1
[2] === [2] //false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
//object1.a === 4
//object2.a === 4
//object3.a === 4
//object4.a === 5

//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name, type, colour) {
    this.name = name,
    this.type = type
    this.colour = colour,
  }

}
class Mammal extends Animal {
  constructor(name, type, colour) {
    super(name, type, colour)
  }

  sound() {
    console.log(`MOOOOOOOO my name is ${this.name} and i/'m a ${this.colour} ${this.type}`)
  }

}

const cow = new Mammal('Daisy', 'Friesian', 'brown')