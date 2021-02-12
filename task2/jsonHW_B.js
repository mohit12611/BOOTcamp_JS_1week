var myCar = {
        make: 'Bugatti',
        model: 'Bugatti La Voiture Noire',
        year: 2019,
        accidents: [
        {
        date: '3/15/2019',
        damage_points: '5000',
        atFaultForAccident: true
        },
        {
        date: '7/4/2022',
        damage_points: '2200',
        atFaultForAccident: true
        },
        {
        date: '6/22/2021',
        damage_points: '7900',
        atFaultForAccident: true
        }
        ]
   }

//  1. Loop over the accidents array. 
//     Change atFaultForAccident from true to false.

   for(let i of myCar.accidents){
       if(i.atFaultForAccident === true){
           i.atFaultForAccident = false ;
       }
   }

//  2. Print the dated of my accidents

   for(let i of myCar.accidents){
       console.log(i.date);
   }

   console.log(myCar.accidents);