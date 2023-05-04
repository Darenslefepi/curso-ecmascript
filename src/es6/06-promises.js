const anothefunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve ('Hey!!');
        } else {
            reject ('Whoooops!!');
        }
    })
}
anothefunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//ejempoo del examen

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}
getData()
    .then(resp => console.log(resp))
    .catch(elor => console.log(elor))

function solution() {
   return getData()
   .then(resp => console.log(resp))
   .catch(elor => console.log(elor))
}
solution()