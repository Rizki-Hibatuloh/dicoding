
/* 
    Rest parameter ini adalah kebalikan dari spread Operator.
    Rest parameter juga dituliskan menggunakan three dots (...). Dengan
    rest parameter,kita dapar menggabungkan beberapa elemen menjadi satu array.
    contoh :
*/

function Sum(...numbers){
    let result=0;
    for(let i of numbers) {
        result += i;
    }
    return result;
}
console.log(Sum(1,2,3,4,5)); // 15 

function ConcatString(...str) {
    let words =  str.join(" ");
    return words;
}
console.log(ConcatString("Hello", "World","From","Javascript")); // Hello  World From Javascript