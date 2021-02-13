let arr = [1,2,3,4,5,6,7,8,9];

let result = function(array){

    let sum = array.reduce((acc,value) => {
        return acc+value;
    },0);

    return sum;
};

console.log(result(arr));