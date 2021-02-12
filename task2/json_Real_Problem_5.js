var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];



function fromListToObject(arr){
    let myobject = {};
    for(let i=0 ; i<arr.length ; i++){
        myobject[arr[i][0]] = arr[i][1] ;

    }
    return myobject;
}

console.log(fromListToObject(array));