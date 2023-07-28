/*
Membuat Class Error Manual
walaupn javascript sudah memiliki standard class error 
namun alangkah baiknya, kita membedakan tiap jenis error
untuk membuat error sendiri secara manual sangatlah mudah
cukup membuat class turunan dari class error
dan jangan lupa tambahkan parameter message 
agar bisa dikirim ke parameter di constructor class error
*/

// ini lebih direkomendasikan untuk membuat eror setiap masing-masing
// artinya tidak semua program mengandalkan kode error dalam javascript namun membuat sendiri secara manual seperti ini

// contoh kode validation Error

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtil {

    static sum(...numbers) {
        if(numbers.length === 0) {
            throw new ValidationError("Total parameter harus lebih dari 0", "numbers")
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
    if(error instanceof ValidationError){
        console.info(`Terjadi error di field ${error.field} dengan error ${error.message}`)
    }else {
        console.info(`Terjadi error : ${error.message}`);
    }
} finally {
    console.info("Program Selesai") // jika terjadi error kode ini tetap dieksekusi
    // finally ini contoh penerapannya seperti menutup akses ke database baik terjadi error atau tidak.
}