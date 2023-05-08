const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-05-05');
console.table(matchers);
