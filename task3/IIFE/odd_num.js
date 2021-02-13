let arr = [1,2,3,4,5,6,7,8,9,10];

let result = (function(array){
    let oddnum = array.filter((num) => {
        return num % 2 !== 0 ;
    });
    return oddnum;
})(arr);

console.log(result);