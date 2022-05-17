// aanmaken lege variable 
let name;
let country;
let p = document.getElementById("output");

const nameChanged = function(event){
    //het event loggen in je console
    name = event.target.value;
    changeInput();
}



const countryChange = function(event){
    country = event.target.value;
    changeInput();
}

const changeInput = function(event){
    const text = `Je heet ${name} en je komt uit ${country}`; 
    p.textContent = text;
}