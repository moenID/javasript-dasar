/* Constructor Class
karena bentuk constructor function mirip dengan function,
jadi bisa menambah parameter pada constructor function, bagaimana dengan class?
di class juga bisa menambahkan contructor, dimana dengan menggunakan constructor
juga bisa menambah parametar saat pertama kali membuat projectnya
untuk membuat constructor di class, bisa menggunakan kata kunci constructor.
*/

// contoh kode constructor class
class Person {
    constructor(name) {
        console.info(`Membuat constructor ${name}`);

    }
}

const munir = new Person("Munir"); // parameter di sini akan di kirim ke parameter constructor
console.info(munir);