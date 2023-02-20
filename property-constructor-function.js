/* Property di Constructor Function 
setelah membuat object, properti dengan mudah dikembalikan 
ke dalam object tersebut hanya dengan menggunakan nama variablenya, 
diikuti tanda titik dan nama propertinya.
untuk menambahkan properti ke semua object yang dibuat dari constructor function,
bisa menggunakan kata kunci this diikuti nama propertinya.
*/

// contoh kode property di constructor function

function Person () {
    this.firstName = ""
    this.lastName = ""
};

const munir = new Person();
munir.firstName = "Misbahul";
munir.lastName = "Munir";
const adrik = new Person();
adrik.lastName = "Adrik";

console.log(munir);
console.log(adrik);