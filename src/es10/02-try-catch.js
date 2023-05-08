//para solucionar errores y decir que es un error ya conocido/El parámetro opcional de catch permite omitir el error si es necesario.
//forma antigua que no servia
try {
    hello();
} catch (error) {
    console.log(error);
}
//forma aparatir del ecmascrip10
try {
    anotherFn();
} catch {
    console.log('asi se escriben los errores');
}
