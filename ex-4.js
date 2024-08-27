// Start coding here
let add = (a, b) => {return a + b}
let subtarct = (a, b) => {return a - b}
let multiply = (a, b) => {return a * b}
let divide = (a, b) => {return a / b}

const obj = {add, subtarct, multiply, divide }
console.log(obj.add(1, 5));
console.log(obj.subtarct(5, 4));
console.log(obj.multiply(1, 5));
console.log(obj.divide(3, 3));