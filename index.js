// new binding this

// CONSTRUCTOR FUNCTION
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.talk = function() {
  return `I am ${this.name}`
}
const person1 = new Person('Xavier', 55)
console.log(person1.talk()) // I am Xavier

// OBJECT.CREATE()
const elfFunctions = {
  attack() {
    return `${this.name} attacks with ${this.weapon}`
  }
}
function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}
const peter = createElf('Peter', 'stones')
console.log(peter.attack()) // Peter attacks with stones

// ES6 CLASS
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  talk() {
    return `I am ${this.name}`
  }
}
const user1 = new User('Laura', 45)
console.log(user1.talk()) // I am Laura