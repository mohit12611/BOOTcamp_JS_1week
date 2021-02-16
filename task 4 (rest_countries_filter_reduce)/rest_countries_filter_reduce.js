
let request = new XMLHttpRequest();

request.open( "GET", "https://restcountries.eu/rest/v2/all" ,true);

request.send();

request.onload = function(){

    let data = JSON.parse(this.response);

    //-Get all the countries from Asia continent / “region” using Filter function
    let asianCountries = data.filter( value =>  value.region === "Asia" );
    console.log(asianCountries);


    //-Get all the countries with population of less than 2 lacs using Filter function
    let countriesPopulation = data.filter( value => value.population < 200000 );
    console.log(countriesPopulation);


    //-Print the following details name, capital, flag using forEach function
    let bunch_details = data.forEach(element => {
        console.log("name -",element.name);
        console.log("capital -",element.capital);
        console.log("flag -" ,element.flag);
        console.log('');
    });


    //-Print the total population of countries using reduce function.
    let totalPopulation = data.reduce((total,element) => {
        return total + element.population;
    },0);
    console.log(totalPopulation);


    //-Print the country which uses US Dollars as currency.
    let countriesDollarCurrency = data.filter((element => element.currencies[0].name === "United States dollar"));
    console.log(countriesDollarCurrency);
};

