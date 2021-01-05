function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)
calc()

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}

// return a function receiving num argument

function incrementByThree(num) {
    return createIncrementor(3)(num)
}

const addOne = createIncrementor(1)

// console.log(addOne(1))
// console.log(incrementByThree(10))

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const generateUrlRu = urlGenerator('ru')
console.log(generateUrlRu('helloworld'))

// our own bind with starbucks and smoothies

// an easy option
// function bind(obj, func) {
//     return func.call(obj)
// }

// more interesting
function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

let pers = {
    name: 'x'
}

function sayHi() {
    console.log(this.name)
}

bind(pers, sayHi)()