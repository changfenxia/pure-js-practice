const person = {
    name: 'Mad Max',
    age: 25,
    greet: function() {
        console.log('hey', this)
    }
}

Object.prototype.sayHi = function() {
    console.log('Ni hao', this)
}

person.greet()
person.sayHi() //it works

const gizmo = Object.create(person)
gizmo.name = 'Gizmo'
gizmo.greet() // from person
gizmo.sayHi() // from Object

'hello'.sayHi() // it works

// a funny example, we add a function to the Object prototype
// and then call it for a String
const pokemon = {
    name: 'Pikachu',
    color: 'Yellow'
}

Object.prototype.atack = function() {
    console.log('PICKACHOOOO!');
}

'Pikachu'.atack()