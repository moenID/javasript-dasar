/* Membuat Object
pembuatan object pada javascript dasar menggunakan tipe data object akan membuat object selalu unik.
sedangkan dalam OOP, biasanya akan membuat class sevagai cetakan sehingga bisa membuat
object dengan karakteristik yang sama berkali-kali tanpa harus mendeklarasikan object 
berkali-kali seperti menggunakan tipe data object.

Membuat Constructor Function
Sebelum ECMAScript 6, pembuatan class biasanya menggunakan function.
hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa 
yang fokus ke OOP.
untuk membuat class di javascript lama menggunakan function
function tersebut dinamai Constructor Function
setelah membuat class, jika ingin membuat object dari class tersebut bisa
menggunakan kata kunci new, lalu diikuti constructor function nya.
*/

// kode object dengan tipe data object

const munir = {
    firstName: "Misbahul",
    lastName: " Munir"
};

const adrik = {
    namaDepan: "Muhammad",
    namaBelakang: "Adrik"
};

// kode constructor function best practice awal nama huruf besar ex ; PremiumMember / Person
function Person() = {

}

const munir = new Person(); // ini objectnya
const adrik = new Person();