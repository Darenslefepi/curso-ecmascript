const user = { username: 'Darens', age:39, Country: 'CO'};
console.log(user);

/* const {username, age, Country} = user;

console.log(username);
console.log(age);
console.log(Country); */

//lo nuevo en ecm9

const {username, ...values} = user;
console.log(username);
console.log(values);

