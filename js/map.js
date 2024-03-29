/*
    Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object.Yang
    membedakan adalah map memperbolehkan key dengan tipe data apa pun, dibandingkan Object 
    yang hanya mengizinkan key bertipe String atau Symbol

    untuk mendefiniskan map gunakan constructor : new Map()

    const myMap = new Map();
*/
const myMap = new Map([
    ["nama", "Arya"],
    [1, "Snow"],
    [true, false]
    ]);
console.log(myMap)

/* 
    Ketika sudah membuat objek Map,kita bisa mendapatkan nilainya berdasarkan key tertentu
    Gunakan metode get () . Lalu untuk mendapatkan pasangan key-value baru gunakan metode
    set()
*/

const capital = new Map ([
    [ 'china', 'Beijing' ],
    ['india','New Delhi'],
    ['USA','Washington DC']
]);

const name = capital.get("china"); // Beijing
console.log(capital);
capital.set('England', 'London'); 
console.log(capital.get('india')); // New Delhi
console.log(capital.size);
console.log(capital);

// penggunaan has dan delete

const wrongMap = new Map();
wrongMap["my key"] ="my value";
console.log(wrongMap.has("my key" )); // true
console.log(wrongMap.delete ("my key")); 


