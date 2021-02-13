let arr = [1,2,3,4,5,6,7,8,9,10];

let oddnum = function(array){
    let result = array.filter((num) => {
        return num % 2 !== 0 ;
    });
    return result;
};

console.log(oddnum(arr));