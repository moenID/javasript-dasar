/* Method di Class
membuat method di class sebenarnya bisa dilakukan seperti 
menambahkan method di constructor function.
Namun, sebenarnya hal tersebut menambahkan method ke dalam instance object
khusus untuk method sebaiknya menambahkan prototype, bukan instance object
Untungnya di class ada cara mudah menambahkan method secara otomatis
di tambahkan ke prototypenya.
*/

// contoh method di class namun tidak direkomendasikan
class Person {
    constructor(name) {
        this.name = name 
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is ${this.name}`);
    }
}

const munir = new Person("Munir");
console.info(munir);
console.info(munir.name);

const adrik = new Person("Adrik");
console.info(adrik);


// contoh method di class yang direkomendasikan

class Orang {
    constructor(name) {
        this.name = name 
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is ${this.name}`);

    }
}

const misbah = new Orang("Misbah");
console.info(misbah);
console.info(misbah.name);
misbah.sayHello("Muhammad");
