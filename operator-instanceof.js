/*
Operator Instanceof

kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class
tertentu atau bukan
kita tidak bisa menggunakan operator typeof, karena object dari class
jika kita gunakan operator typeof, hasilnya adalah "object"
Operator instanceof akan menghasilkan boolean, true jika benar
object tersebut adalah instance objectnya, atau false jika bukan.
*/

// contoh kode

class Employe {

}

class Manager {

}

const adrik = new Employe();
const munir = new Manager();

//typeof
console.info(typeof adrik); // object
console.info(typeof munir); //object

//inastanceof
console.info(adrik instanceof Employe); //true
console.info(adrik instanceof Manager); //false
console.info(munir instanceof Employe); // false
console.info(munir instanceof Manager); // true


// Operator Instanceof di Class  Inheritence

/* Operator instnaceof mendukung class inheritance
artinya, instanceof juga bisa digunakan untuk mengecek
apakah sebuah object adalah instance dari class tertentu
atau turunan dari class tertentu
*/

// contoh kode

class Pekerja {

}

class Juragan extends Pekerja {

}

const moen = new Pekerja();
const misbah = new Juragan();

//typeof
console.info(typeof moen); // object
console.info(typeof misbah); //object

//inastanceof
console.info(moen instanceof Pekerja); //true
console.info(moen instanceof Juragan); //false
console.info(misbah instanceof Pekerja); // true karenan juragan mempunyai skil pekerja sebab juragan merupakan turunan dari pekerja dengan method extends
console.info(misbah instanceof Juragan); // true
