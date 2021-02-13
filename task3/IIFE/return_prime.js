let arr = [1,2,3,4,5,6,7,8,9,11,13];

let result = (function(array){

    let prime = array.filter((value) => {
            let isPrime = true;
            for(let i=2 ; i <= Math.ceil(value/2) ; i++){
                 if(value % i === 0){
                    isPrime = false;
                    break;
                }    
            }
                
            if(value!==1 && isPrime){
                return value;
            }
    });
    return prime;
})(arr);

console.log(result);