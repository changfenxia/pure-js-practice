console.log('start');

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2000sec')
}, 2000);

setTimeout(timeout2sec, 2000);

console.log('end')

//settimeout 0
console.log('1')

//sends anonymous funciton to the call queue
setTimeout(function() {
    console.log('2')
})

console.log('3')
// 1, 3, 2
// call stack => call queue => call stack
