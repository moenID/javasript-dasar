/*
Error Handling
saat terjadi error di kode program javasript, kadang kita tidak ingin
program kita berhenti
Di Javascript kita bisa menangkap jika terjadi error
kita bisa menggunakan try catch statement untuk menangkap error
pada block try, kita akan mencoba mengakses kode program yang bisa  menyebabkan error
dan jika terjadi error block try akan berhenti dan otomatis masuk ke block catch
jika tidak terjadi error, block catch tidak akan di eksekusi
*/

// contoh kode ty dan catch (Eror Handling)

class MathUtil {

    static sum(...numbers) {
        if(numbers.length === 0) {
            throw new Error("Total parameter harus lebih dari 0")
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }
        return result;
    }
}

try{ //jika terjadi error kode ini diloncati
    console.info(MathUtil.sum());
    console.info("Adrik");
} catch (error) {
    console.info(`Terjadi error : ${error.message}`)
} finally {
    console.info("Program Selesai") // jika terjadi error kode ini tetap dieksekusi
    // finally ini contoh penerapannya seperti menutup akses ke database baik terjadi error atau tidak.
}



/*
Kata Kunci finally
kadang kita ingin melakukan sesuatu entah itu terjadi 
error ataupun tidak
dalam try catch, kita bisa menambahkan block finally
block finally ini akan selalu dieksekusi setelah try catch selesai
entah terjadi error atau tidak, block finally akan dieksekusi.
*/

/*
Try Finally (trik)
kata kunci finally juga bisa digunakan tanpa perlu
menggunakan catch.
biasanya ini digunakan dalam kasus tertentu (walaupun jarang)
*/

// contoh kode program

class Counter {
   
    #counter = 1;

    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }
}


const counter = new Counter();
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());