const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3').add('item 4').add('item 5');
list.delete('item 3')
list.add('item 20')

console.log(list);
console.log(list.has('item 51'));
console.log(list.size)