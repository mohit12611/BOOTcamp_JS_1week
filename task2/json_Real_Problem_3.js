var object = {name: "ISRO", age: 35, role: "Scientist"};

let arr = [];

function convertListToObject(obj) {
    // your code here
    for(let i in obj){
        let arr1 = [];
        
        arr1.push(i);
        arr1.push(obj[i]);
        arr.push(arr1);      
    }
    
    return arr;
   }


   console.log(convertListToObject(object));