const anothefunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve ('Hey!!');
        } else {
            reject ('Whoooops!!');
        }
    })
}
anothefunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finaly'));
