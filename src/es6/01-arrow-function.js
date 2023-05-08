/* function normal */
function square(num) {
    return num * num;
}
console.log(square(6));

const multi = function(num) {
    return num * num;
}
console.log(multi(8));

/* function arrows */
const multiplicar = (multi) => {
    return multi * multi;
}
console.log(multiplicar(7));

let porpor = (por) => {
    return por * por;
}
console.log(porpor(9));

/* fucntion sin el return */

const suma = multi => multi + multi;
console.log(suma(10))

