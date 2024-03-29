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

const multiply= (x,y)=> x*y;
console.log(multiply(5,3));

/*
ketika fungsi perlu mengembalikan nilai,kita tidak perlu lagi 
menuliskan return(hanya bekerja jika fungsi hanya 1 baris).
*/
 