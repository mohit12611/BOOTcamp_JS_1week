var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    var transformEmployeeList = [];

    for(let i in arr){
        let myobject = {};
        for(let j in arr[i]){
            myobject[arr[i][j][0]] = arr[i][j][1] ;
        }
        transformEmployeeList.push(myobject);
    }
        
    //Your code
    
    return transformEmployeeList;
   }

   console.log(transformEmployeeData(array));