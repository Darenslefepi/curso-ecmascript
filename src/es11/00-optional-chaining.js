//para validar si existe alguna propiedad y si no existe me develva undefined y no un error

const users = {darens: {country: 'CO', name: 'Andres'}, rayblue: {country: 'EU', name: 'felipe'}};
users
console.log(users.rayblue.name)
users.darens.age = 39
users.vaca = {casa: 'cuna'};
users
/* caracteristica de los signos de ? agregada para que de undefined y no error que bloquee el codigo */
console.log(users.franchesco?.country);
users





