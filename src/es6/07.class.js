const vaca = () => {
    return 'Muleron'
}
console.log(vaca())

function baca() {
    return 'iguelon';
}
console.log(baca())

const daca = function() {
    return 'yeguon'
}
console.log(daca())

//las clases desde aqui - antes eran las clases de funtion

class user {
    //metodos
    grrting() {
        return 'hello';
    }
};
const darens = new user();
console.log(darens.grrting());
const baby = new user();
console.log(baby.grrting())

//Constructor

class Persona {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country
    }
}
const juan = new Persona('juan', 8, 'CO');
const maria = new Persona('Maria', 8, 'CL');
console.log(maria)
maria
juan
let mocoso = {...juan};
mocoso
mocoso.name = 'Pedro';
mocoso
juan
mocoso.country = 'JP';
mocoso

//otro ejemplo con this
class Personita {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello, Como te va';
    }
    grrting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new Personita('Ana');
console.log(ana.grrting())
const luisa = new Personita('Luisa');
console.log(luisa.grrting())
console.log(luisa.name);

//setters getters

class User {
    //Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Metodos
    speak() {
        return 'Hello, Como te va';
    }
    grrting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}
const david = new User('david', 15);
david
console.log(david.uAge);
console.log(david.age);
console.log(david.uAge = 23);
console.log(david.age);
david
console.log(david.age = 35);
david