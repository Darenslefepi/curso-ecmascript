//arrays destructuring

let fruits = ['Apple', 'Banana', 'Fresa'];
let [a, b] = fruits;
console.log([a, b]);
console.log([a, fruits[2]]);

//Object destructuring

let user = {userName: 'Oscar', age: 34};
let {userName, age} = user;

console.log(userName, age);

//Ejemplo antiguo

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario.plataforma

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platz

//ejemplo con ecma6

const usuario2 = { nombre2: "Andres", edad2: 23, plataforma2: "Platzi" }

const { nombre2, edad2, plataforma2 } = usuario2

console.log(nombre2)  // 'Andres' 
console.log(edad2)  // 23
console.log(plataforma2)  // 'Platzi'

// spread operator (como copiar los datos de un objecto y fusionar dos objectos)

let person = {name: 'Dany', age: 48, Talla: 58};
let pais = 'Col';
let cedula = {id:1,...person, pais};
cedula

const {Talla} = person
console.log(Talla)

//rest 
function suma(num, ...values) {
    console.log(values);
    console.log(num + values[10]);
    return num + values[0];
}
suma(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 41)

//para separar cada letra en el array
const array = [ ..."Hola muchacha"]    // [ 'H', 'o', 'l', 'a' ]
console.log(array)

// En arrays copiar en diferentes memorias
const otherArray = [ ...array] 
otherArray[0] = 'J'
console.log(array)
console.log(otherArray)

//para unir arrays
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray2 = [ ...array1, number, ...array2 ];

console.log(otherArray2) // [1,2,3,4,5,6,7]

//Combina objetos JSON con el Spread Operator

let json1 = {name: 'Mr. Michi', food: 'Pescado'};
json1
let json2 = {age: 12, color: 'Blanco'};
json2

function solution(json1 = {
    name: "Mr. Michi",
      food: "Pescado"
    },
    json2 = {
      age: 12,
      color: "Blanco"
    }) {
    return {...json1, ...json2};
}
console.log(solution())
console.log(solution({name: 'Bigotes', food: 'Pollito'}))
console.log(solution(json1, {age: 66, color: 'Red'}))
console.log(solution(json1, {age: 66}))