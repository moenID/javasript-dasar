/* Prototype
Javascript sebelumnya dikenal dengan pemograman berbasis prototype
memang agak membingungkan, dan banyak yang bingung prototype di javascript
pada chapter ini, akan membahas prototype

Prototype Inheritens
saat membuat object dari constructor function, object tersebut 
disebut instance, semua property (baik value atau method), akan berada dalam
instance objectnya. 
setiap membuat sebuah constructor function, maka secara otomatis
akan dibuatkan prototypenya, misal ketika membuat constructor function person, 
maka akan ada Person.prototype.
saat membuat object instance, secara otomatis object tersebut
adalah turunan dari constructor.prototypenya (person.prototype)
untuk mengakses prototype milih sebuah instance, bisa menggunakan _proto_
*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
}

// Contoh kode Object Instance
const munir =  new Person("Misbah", "Munir");
const adrik = new Person("Muhammad", "Adrik");

console.info(munir);
console.info(adrik);

/* Menambah Property ke Prototype
property mirip object, dimana bisa menambahkan property baik itu
value ataupun  method.
saat menambah sebuah property ke prototype, secara otomatis, 
semua object instance yang turunan dari prototype tersebut 
akan memiliki property tersebut.
*/

// contoh kode property ke prototype hanya untuk instance object munir
munir.sayHello = function () {
    console.info("Semangat Sore");
}

// contoh kode menambahkan Property ke prototype

Person.prototype.sayHello = function () {
    console.info("Selamat Sore");
}

Person.prototype.run = function () {
    console.info(` ${this.firstName} is running`);
}

/* Cara kerja Prototype Inheritance
bagaimana bisa property di prototype diakses dari object instance?
ketika mengakses property di object instance, pertama akan di cek
apakah di object tersebut terdapat property tersebut atau tidak, 
jika tidak, maka akan dicek di _proto_(prototypenya), 
jika masih tidak ada, akan dicek lagi di _proto_(prototype)
yang lebih tinggi, begitu seterusnya, sampai di Object Prototype.
*/