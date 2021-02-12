let obj = {name : 'RajiniKanth', age : 25, hasPets : true}
let arr = [];

function printAllKeys(obj){

    for(let i in obj){
        arr.push(i);
    }

    return arr;
}

console.log(printAllKeys(obj));