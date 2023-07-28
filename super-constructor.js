/* 
Super Constructor
Class Inheritance sifatnya seperti Prototype Inheritance
Bagaimana dengan Constructor Inheritance?
Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi contructor lain
dengan tujuan agar property di constructor lain bisa di tambahkan ke instance object ini 
dalam kasus ini, jika ingin mencapai hasil yang sama, bisa menggunakan kata kunci super di dalam constructor.
kata kunci super digunakan untuk memanggil constructor super class
jika child class membuat constructor, maka wajib memanggil paren constructor
walaupun di parent tidak ada constructor.
*/


// contoh code super constructor
class Employee {
    constructor(fritsName) {
        this.fritsName = fritsName;
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is employee ${this.fritsName}`);
    }
}
class Manager extends Employee {
    constructor(fritsName, lastName) {
        super(fritsName);
        this.lastName = lastName;
    }
    sayHello(name) {
       console.info(`Hi ${name}, my name is manager ${this.fritsName} ${this.lastName}`);
    } 
}

const adrik = new Employee("Adrik");
adrik.sayHello("Munir");

const misbah = new Manager("Misbahul", "Munir");
misbah.name = "Misbah";
misbah.sayHello("Adrik")

console.info(adrik);
console.info(misbah);