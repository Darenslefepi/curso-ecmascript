//pasar arrays de array a objectos

const entries = new Map([['name', 'Andres'], ['age', 39]]);
console.log(entries);
console.log(Object.fromEntries(entries));

//la operacion inversa

const inversentries = {name: 'Andres', age: 39};
console.log(inversentries);
console.log(Object.entries(inversentries));