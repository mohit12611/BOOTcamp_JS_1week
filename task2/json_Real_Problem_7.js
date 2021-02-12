var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName){
    // your code here
   /* 
*/
    let a = JSON.stringify(actual);
    let e = JSON.stringify(expected);
if(a===e){
    testName= "---->   PASSED  detects that two objects are equal";
    console.log("\n");
    console.log(testName);
    console.log("\n");
}
else{
    testName= "---->   FAILED [my test] Expected " + a + ", but got "+ e;
        console.log("\n");
        console.log(testName);
        console.log("\n");
}
/*  let flag = 1;
    for(let i in actual){
        for(let j in expected){
            if(i===j){
                if(actual[i] === expected[j]){
                    continue;
                }
                else{
                    flag=0;
                }
            }
            
        }
    }
    if(flag===1){
        testName= "---->   PASSED  detects that two objects are equal";
        console.log("\n");
        console.log(testName);
        console.log("\n");
    }
    else{
        testName= "---->   FAILED [my test] Expected " + a + ", but got "+ e;
        console.log("\n");
        console.log(testName);
        console.log("\n");
    }
  */  

   }

   assertObjectsEqual(actual, expected,"detects that two objects are equal");