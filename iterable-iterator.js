/*
Iterable dan Iterator

salah satu fitur terbaru di ES6 adalah iterable
iterable adalah special object yang memiliki standarisasi
dengan mengikuti standarisasi iterable, secara otomatis
kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan 
perulangan for ....of
contoh yang sudah mengikuti standar iterable adalah
string, Array, Object dan lain-lain.
*/

/*
Cara Kerja Iterable dan Iterator

Jika kita mengikuti kontrak iterable, maka object yang 
kita buat akan bisa dilakukan iterasi menggunakan for..of
setiap kita melakukan perulangan, object iterator akan dibuat
hal ini menjadi aman jika kita melakukan iterasi berulang-ulang
karena iterator baru akan dibuat terus menerus
*/


// kode iterable dan iterable

class CounterIteratorResult {
    constructor(value, done) {
        this.value = value;
        this.done = done;
    }
}

class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try{
            if(this.value > this.max){
                return new CounterIteratorResult(this.value, true);
            }else{
                return new CounterIteratorResult(this.value,false);
            }
        } finally {
            this.value++;
        }
    }
}

class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    [Symbol.iterator]() {
        return new CounterIterator(this.value, this.max);
    }
}

const counter = new Counter(1, 10);
for (const value of counter) {
    console.info(value);
}