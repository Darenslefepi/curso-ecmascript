function newUser(name, country, age) {
    var name = name || 'Andres';
    var country = country || 'Colombia';
    var age = age || 39
    console.log(name, country, age)
}
newUser()
newUser('felipe', 'Alemania', 25)
newUser('Carlos', 'Portugal', 32)

//ECMA6

function newAdmin(name = "Camilo", country = 'Chile', age = 29) {
    console.log(name, country, age)
    return `${name} ${country} ${age}`
}
newAdmin()
newAdmin('felipe', 'Alemania', 25)
console.log(newAdmin())
console.log(newAdmin('felipe', 'Alemania', 25))

//ejemplo con numeros

function suma(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(suma(3, 4))
console.log(suma(3))
console.log(suma())
