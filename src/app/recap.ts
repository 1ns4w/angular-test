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
  name: string

  constructor(name: string) {
    // assign value to name property
    this.name = name
  }

}

const me = new Person('John')
console.log(me.name)

