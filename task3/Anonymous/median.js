let arr1 = [1,2,3,45,5];
let arr2 = [9,8,7,6,5];

let result = function(array1, array2){
    let array = (array1.concat(array2)).sort((a,b) => a-b);
    let median = (array[array1.length-1] + array[array1.length])/2 ;

    return median;

};

console.log(result(arr1,arr2));