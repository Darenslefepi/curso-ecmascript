import {getData} from "./export.js";
async function solution() {
    return await getData();
 }
solution()


//otra forma

import {getData} from "./export.js";
    function solution() {
    return getData().then(list => list);
 }
solution()

