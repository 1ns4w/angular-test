const username: string | number = 1
console.log(username)

const greet = (name?: string) => {
  console.log(`Hello ${name || 'World'}`)
}

const sum = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a + b)
}

class Person {
  // properties
  // properties are public by default
  // properties can be private or protected by prefixing them using the private or protected keyword
  name: string

  // methods
  // constructor
  // we can avoid declaring class properties by setting their visibility in the constructor
  constructor(name: string, private age: number) {
    // assign value to name property
    this.name = name
    this.age = age
  }

}

const me = new Person('John', 12)
//console.log(me.name, me.age)

