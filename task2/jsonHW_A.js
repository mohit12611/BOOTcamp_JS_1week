
var cat = {
    name: 'Fluffy',
    "activities": ["play", "eat cat food"],
    "catFriends": [
        {
        "name" : 'bar' ,
        "activities": ['be grumpy','eat bread omblet'],
        "weight": 8,
        "furcolor": 'white',
        }, 
        
        {
        "name": 'foo',
        "activities": ['sleep', 'pre-sleep naps'],
        "weight": 3 ,
        }
    ]
   }
   
cat.height= 5;
cat.weight= 4;
cat.name="Fluffyy";

for(let i of cat.catFriends){
    console.log(i.activities)
}

console.log("");

for(let i of cat.catFriends){
    console.log(i.name);
}

let weight = 0 ; 

console.log("");
for(let i of cat.catFriends){
    weight += i.weight; 
}

console.log(weight);
console.log();

var total= cat.activities.length;

for(let i of cat.catFriends){
    total += i.activities.length;
}

console.log(total);
console.log("");

for(let i of cat.catFriends){
    if(i.name === "bar"){
        i.activities.push("purring");
        i.activities.push("sleeping");
    }
    else if(i.name === "foo"){
        i.activities.push("climbing");
        i.activities.push("fighting");
    }

}

for(let i of cat.catFriends){
    if(i.name === "bar"){
        i.furcolor = "black";
    }
}
 console.log(cat.catFriends);

