import Immutable from 'immutable';
const DATA = 35;
const ARRAY_SIZE = 5000;

function benchmarkIt(iterations, f) {
    let start = new Date().getMilliseconds();
    for (let i = 0; i < iterations; i++) {
        f();
    }
    let end = new Date().getMilliseconds();
    return end-start;
}


let arr = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
    arr.push(i);
}

console.log("js slice(0) test" , benchmarkIt(10000,  function() {
    // slice(0) - is the fastest native way to go
    // see - http://jsben.ch/wQ9RU
    arr.slice(0).push(DATA);
}));

let immutableList = Immutable.List(arr);

console.log("immutableList test" , benchmarkIt(10000,  function() {
    immutableList.push(DATA);
}));
