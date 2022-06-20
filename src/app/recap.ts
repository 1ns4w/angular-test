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
  private name: string

  // methods
  // constructor
  // we can avoid defining the class properties by setting their visibility in the constructor
  constructor(name: string) {
    // assign value to name property
    this.name = name
  }

}

const me = new Person('John')
console.log(me.name)

