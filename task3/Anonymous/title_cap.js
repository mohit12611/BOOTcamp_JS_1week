let str= "Convert all the strings to title caps in a string array";

let result = function(str){

// Solution using slice(,)
     /*   let cap = str.toLowerCase().split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    return cap;
*/


// Solution using .replace(,)
    let cap = str.toLowerCase().split(" ").map((word) => {

        word = word.replace(word[0], word[0].toUpperCase());
        return word;

    }).join(" ");
    return cap;

};




console.log(result(str));