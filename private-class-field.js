/*
Private Class Field
secara defauld, saat kita menambahkan field, maka field tersebut bisa
diakses dari manapun.
jika ingin membuat field yang bersifat private (hanya bisa diakses didalam class), 
maka bisa menggunakan tanda # sebelum nama field
ini dinamakan private class field, dana hanya bisa diakses dari dalam class saja.
*/

// Contoh kode
class Counter {
    #counter = 0

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter;
counter.increment();
counter.increment();
counter.increment();

console.info(counter.get());
console.info(counter);
