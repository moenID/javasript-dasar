/* Dalam Constructor bisa dibuat property baik itu berisi value
ataupun function. di dalam constructor, bisa memanggil constructor lain
dengan begitu, bisa mewarisi (seperti mengkopi) semua property yang dibuat di constructor lain tersebut.
untuk memanggil constructor, bisa menggunakan NamaConstructor.call(this, parameter)
*/

// contoh kode constructor inheritance
function Employee(firstName) {
    this.fristName = firstName;
    this.sayHello = function(name) {
        console.info(`Hi ${name}, my name is ${this.fristName}`);
    }
}

function Manager(firstName, lastName) {
    Employee.call(this, firstName)
    this.lastName = lastName;
}

const misbah = new Manager("Misbah", "Munir");
console.info(misbah);
