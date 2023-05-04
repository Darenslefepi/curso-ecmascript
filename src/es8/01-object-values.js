/* esto nos trae del objeto los valores en un array nuevo */

const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
countries
console.log(Object.values(countries));

let panas = Object.values(countries);
panas
console.log(panas.length);
console.log(panas[1]);
console.log(countries.CO);

let iniciales = Object.keys(countries);
console.log(iniciales);

le