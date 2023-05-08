//flat
//pata unir todos los array dendtro del array en uno solo
const array = [1, 2, 3, 4, 5, 6, [1, 2 ,3, 4, 5, [1, 2, 3, 4]]];
console.log(array[6][5][3])
console.log(array.flat(2));

//flat map
//coloca los mismos numero del array2 pero seguido de su multiplicacion *2
const array2 = [1, 2, 3, 4, 5, 6];
console.log(array2.flatMap(v => [v, v * 2]));