class User {
    //Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Metodos
    #speak() {
        return 'Hello, Como te va';
    }
    grrting() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}
const david = new User('david', 15);
david
console.log(david.uAge);
console.log(david.age);
console.log(david.uAge = 23);

//se agrego el # ante de speak y uAge