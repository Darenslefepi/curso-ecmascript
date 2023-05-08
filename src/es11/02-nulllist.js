//caracteristica para colocar un valor si la variable tiene la propiedad como nula, si ya tienen un valor no coloca nada y la deja como estaba.
const numberOne = 1;
const validar = numberOne ?? 15;
console.log(validar);

const numberTwo = null;
const validar2 = numberTwo ?? 15;
console.log(validar2);