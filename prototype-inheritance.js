/* Prototype Inheritance
prototype selalu memiliki parent, artinya dia adalah turunan.
parent tertinggi adalah Object Prototype
sekarang, bagaimana jika ingin melakukan inheritance 
ke protitype lain?
hal ini, juga bisa dilakukan namun melalui trick. karena 
hal ini sebenarnya untuk javascript modern, tidak direkomendasikan
lagi praktek OOP menggunakan Prototype , karena di ES6
sudah dikenalkan kata kunci class yang akan di bahas pada materi class.
*/

// contoh kode prototype inheritance yang salah
function Employee(nama) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

Manager.prototype = Employee.prototype; // ini kesalahannya

Manager.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}

const employee = new Employee("Adrik");
employee.sayHello("Misbah")

const manager = new Manager("Munir");
manager.sayHello("Misbah")

// contoh kode prototype inheritance benar

function Pekerja(name) {
    this.name = name;
}

function Menejer(name) {
    this.name = name;
}

Menejer.prototype = Object.create(Pekerja.prototype);

Menejer.prototype.sayHi = function (name) {
    console.info(`Hi ${name}, my name is Menejer ${this.name}`);
}

Pekerja.prototype.sayHi = function (name) {
    console.info(`Hi ${name}, my name is Pekerja ${this.name}`);
}

const pekerja = new Pekerja("Adrik");
pekerja.sayHi("Misbah");

const menejer = new Menejer("Munir");
menejer.sayHi("Misbah");

console.info(pekerja);
console.info(menejer);