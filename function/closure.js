    // Lexical Scope

    function init() {
        const name = "Rizki Hibatuloh";  // variabel lokal di dalam scope fungsi init

        function greet() {
            console.log(`Hello, ${name}!`);   // mengakses variabel lokal dari scope fungsi lainnya
        }

        greet(); // memenggil dahulu fungsi greet
        
    }

    init(); // kemudian memanggil fungsi parentnya atau init

    /*
     * Keterangan:
     * - fungsi init() merupakan parentnya yg memiliki local variabel name dan fungsi greet
     * -greet() merupakan inner function yg di definisikan di dalam init() dan hanya bisa diakses dari dalam init().
     * greet() tidak memiliki variabel local namun karena dia merupakan inner function, dia dapat mengakses -
     * function parentnya yaitu init(),sehingga dapat mengakses variabel name. Itulah yang dimaksud lexical Scope
    */

    // bentuk lain dari codingan diatas

    function sayHello(){
        const nama = 'Rizki';

        function ucapan() {
            console.log( `Halo, selamat pagi tuan ${nama}` );
        }
        return ucapan;
    }

    const  ucapSaya = sayHello();
    ucapSaya();