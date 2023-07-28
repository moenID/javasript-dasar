/*
Private Method
sebagaimana field, terdapat proposal yang juga untuk menambahkan 
fitur private method di EcmaScript. 
dengan demikian, access modifier private juga bisa
digunakan di method.
caranya sama dengan menambahkan tanda # di awal method,
maka secara otomatis method tersebut adalah private.
Ingat fitur ini masih dalam tahapan, belum benar-benar 
menjadi standart EcmaScript. jadi tidak semua browser mendukung.

*/

// Contoh kode
class Person {

    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.info("Hello");
    }

    #sayWithName(name) {
        console.info(`Hello ${name}`);
    }
}

const munir = new Person();
munir.say("Adrik");