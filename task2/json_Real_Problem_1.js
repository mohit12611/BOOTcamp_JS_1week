var obj = {name : "RajiniKanth", age : 33, hasPets : false};
let arr = [];

function printAllValues(obj) {
 // your code here
    
    for(let i in obj){
        arr.push(obj[i]);
    }

    return arr;
}

console.log(printAllValues(obj))