/* Property di Class
sama seperti constructor function, dalam class pun bisa menambahkan property
karena hasil akhirnya sebuah object, jadi menambahkan property di class juga
bisa dilakukan di instance objectnya.  atau langsung di constructornya
*/

// contoh kode property di class
 class Person {
    constructor(name) {
        this.name = name
    }
 }

 const munir = new Person("Munir");
 console.info(munir);
 console.info(munir.name);