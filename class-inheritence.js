/* Class Inheritance
sebuah class bisa melakukan pewarisan dari class lainnya dengan
menggunakan kata kunci extends. 
Di javascript, class inheritance sama seperti prototype inheritance,
hanya bisa memiliki satu parent class
*/

// contoh code class inheritance 
class Employee {
    sayHello(name) {
        console.info(`Hi ${name}, my name is employee ${this.name}`);
    }
}

class Manager extends Employee {
    //sayHello(name) {
    //    console.info(`Hi ${name}, my name is manager ${this.name}`);
    //} // ini saya koment karena untuk melihat bahwa sayHello berhasil di extend atau tidak
}

const adrik = new Employee();
adrik.name = "Adrik";
adrik.sayHello("Munir");

const misbah = new Manager();
misbah.name = "Misbah";
misbah.sayHello("Munir")

console.info(adrik);
console.info(misbah);