/*
Class Field
Biasanya, saat ingin menambahkan field (property yang berisi value), biasanya menambahkan di constructor
Namun, ada di ECMAScript pembuatan public class field
ditempatkan di luar constructor, selever dengan penembatan method.

Public Class Field
dalam proposal pengajuan class field disebutkan bahwa EcmaScript
akan mendukung access modifier public dan private.
public artinya bisa diakses dari luar class, dan private
hanya bisa diakses didalam class saja.
private class field akan dibahas pada chapter selanjutnya
Untuk membuat publik clas field, bisa langsung buat nama field
dengan valuenya selevel dengan method
jika tidak memasukkan value ke dalam field tersebut,
maka field tersebut memiliki value undefined.
*/

// contoh kode public class field

class Customer {
    fristName;
    lastName;
    balance = 0;


    constructor(fristName, lastName) {
        this.fristName = fristName;
        this.lastName = lastName;

    }

    sayHello() {

    }
}

const munir = new Customer("Misbahul", "Munir");
console.info(munir);

