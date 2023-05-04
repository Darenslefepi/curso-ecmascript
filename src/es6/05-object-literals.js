//enached object literals
//vieja forma
function newUser(user, age, country, uId) {
    return {
        user: user,
        age: age,
        country: country,
        uId: uId
    }
}
console.log(newUser('darenslefepi', 39, 'CO', 1));

//forma despues de ECMAScript 6

function nuevoUsuario(usuario, edad, pais, id) {
    return {usuario, edad, pais, id}
}
console.log(nuevoUsuario('RayBlue', 24, 'EU', 2))