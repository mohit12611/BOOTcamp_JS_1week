// Steps :
// 1. Creat a request variable.
// 2. Create a connection.
// 3. Send the request.
// 4. Process and load the responce


var request = new XMLHttpRequest();

request.open('GET' , 'https://restcountries.eu/rest/v2/all' , true); // any problem in line 5 will not affect the rest of the code

request.send();

request.onload = function (){                     //anonimous function
    
    try{
    var data = JSON.parse(this.response);           // response is in string format "[{} , {}]" ==> [{} , {}]
    
    if(data.length !== 300){

        throw new SyntaxError("data not equal to 300");
    }
    }
    catch(err){
        alert(err.name);
        alert(err.message);
        alert(err.stack)
    }
    //task 1 . print the flag url of all country   
    //task 2 . print the countries whose region is asia
    //task 3 . print total_population of all countries
  /*  
    for (let i of data){
        console.log(i.flag);
    }

    for(let j of data){
         if( j.region === "Asia"){
                console.log(j.name);
            }
     }


     let totalpopulation = 0;
    for(let i of data){
        totalpopulation += +i.population;
        console.log(totalpopulation);
    }
    
    console.log(totalpopulation);
     */
 }


