let arr = ["Anna","Civic","Kalis","Level","Father","Mom"];


let result = (function(array){
    
    let final = [];
     for(let i = 0 ; i< array.length ; i++){
 // solution using reverse function and [spread operator] - copy array by value        
        let sam = array[i].toLowerCase().split("").join("");
        let samrev = [...sam].reverse().join("");     //spread operator  &  reverse()
        if(sam === samrev){
            final.push(sam);
        }


/*  // solution WITHOUT using  [spread operator] - copy array by value       
           
           let samrev = array[i].toLowerCase().split("").reverse().join(""); 
           if(array[i].toLowerCase() === samrev){            
               final.push(array[i]);
           }
*/



// solution using simple for loop 
       /* let a = false;       // flag
        for(let j = 0 ; j< sam.length/2 ; j++ ){
            if(sam[j] !== sam[sam.length - 1 - j] ){          
                break;
            }
            else{
                a= true;
            }
        }
        if(a){
            final.push(sam.join(""))
        }
        */

    }

    return final;
})(arr);

console.log(result);
