function hello() {
    console.log('Hello ', this)
}

const person = {
    name: 'Teemo',
    age: 450,
    sayHello: hello,
    logInfo: function(name, age) {
        console.group(`${this.name} info:`)
        console.log(`Name is: ${this.name}`)
        console.log(`Age is: ${this.age}`)
        console.groupEnd()
    }
}

person.sayHello() // this - person object

const person2 = {
    name: 'Darius',
    age: 30
}

const person3 = {
    name: 'Jinx',
    age: 16
}

// bind sayHello function to  person2 object and then call it with ()
// this - person2 object
person.sayHello.bind(person2)()

// bind logInfo to person2 object again
person.logInfo.bind(person2)()

// move it to a separate function
const dariusLogInfo = person.logInfo.bind(person2)
dariusLogInfo()

// let's try call method. Call - calls a function, while bind returns it
// with a new this context and we shsould call it with ()
person.logInfo.call(person2);

// apply method, always takes 2 parameters
person.logInfo.apply(person3, [])

// practice with arrays
const arr = [1, 4, 5, 0, 22, 2]

// try direct approach
function multiplyBy(arr, n) {
    return arr.map(function(el) {
        return el * n;
    })
}

// another approach
Array.prototype.multBy = function(n) {
    return this.map(e => e * n)
}

console.log(arr.multBy(4))