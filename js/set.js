const numberSet = new Set([1, 2, 3]);
console.log(numberSet); // {1, 2,

/** fungsi add() hanya menerima satu argumen saja. Jika anda
 * memasukkan array,maka array tersebut akan dianggap sebagai
 * satu elemen sendiri.Nilai yang duplikat akan diabaikan
 */

numberSet.add(4);
numberSet.add(10);
console.log(numberSet); // {

numberSet.delete(10);
console.log(numberSet); 

/* 
    Ingat bahwa set tidak memiliki urutan atau index,sehingga argumen yang 
    dimasukkan ke dalam fungsi delete() adalah nilai yang ingin dihapus,bukan indexnya.

*/