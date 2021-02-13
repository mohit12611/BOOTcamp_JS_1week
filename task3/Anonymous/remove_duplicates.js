let arr = ["mohit", "ujwal", "ujwal" ,1,3,0,2,2];


// 1st Solution using  Set Object  
/*
let result  = function(array){
    
  return new Set(array);

};

console.log([...result(arr)]);
*/


//Solution using -filter- function of array
let result = function(array){

    let unique = array.filter((value,index) => {
      if(array.indexOf(value) === index){
        if(value === 0){
          return "0";
        }
        return value;
      }
    });
    
    return unique;

};

console.log(result(arr));