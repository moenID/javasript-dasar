/* Method di Constructor Function
sebagaimana dalam tipe data object, method (function) juga dapat ditambahakan 
dalam constructor function
Jika menambahkan method(function) di constructor function, secara otomatis
object yang diibuat akan memiliki method tersebut 
*/

// contoh kode method dalam function
function Person() {
    this.firstName = ""
    this.lastName = ""
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const munir = new Person()
munir.firstName = "Misbahul";
munir.lastName = "Munir";
munir.sayHello("adrik");

console.log(munir);
