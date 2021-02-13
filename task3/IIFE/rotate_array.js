let arr = [1,2,3,4,5,6];
let k = Math.floor(Math.random() * (arr.length)+1);

console.log("rotate array",k,"times");

let result = (function(array){
    for(let i = 0 ; i < k ; i++){
        array.unshift(array.pop());      // unshift(element1, element2) will put elements at start of an array
    }

    return array;
})(arr);


/*  DIFFERENT approach by LOOkING at PATTERN of OUTPUT
console.log("rotate array",k,"times");
let result = function(array){
    if(k!==0){
        array = array.reverse();
    array1 = array.slice(0,k).reverse()
    console.log(array1);
    array = array1.concat(array.slice(k).reverse());

    return array;
    }
    return array;
}
*/
console.log(result);