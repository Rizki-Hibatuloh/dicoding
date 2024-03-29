// function declaration

function sayHello (greet){
    console.log(`${greet}, World!`); 
};
sayHello("Good");


//  FUNCTION EXPRESSION
const sayName = function (name) {
    console.log( `My name is ${name}` );
};
sayName("Nara");

//  ARROW FUNCTION

const city = (cityName) => {
    console.log (`I live in ${cityName}`) ;
}
city ("Seoul")

// PERSINGKAT CODE
/*
    const city= (cityName) => console.log(`I live in ${cityName}`);
    city ("Seoul");
*/