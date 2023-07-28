/*
Membahas Eror
saat membuat aplikasi sudah tentu kita tidak akan terhindar dari Eror
di Javascript, Eror merupakan sesuatu yang sudah standar
banyak sekali class eror di javascript, namun class eror di JavaScript selalu
berujung di class Eror, artinya class Eror adalah superclass untuk semua eror di javascript
contoh class eror yang terdapat di javascript contohnya SyntaxError, 
TypeError, EvalError, dan lain-lain
*/

/*
Throw Error
Saat kita membuat instance object dari class Error
tidak lantas otomatis terjadi error
kita perlu memberitahu program kita bahwa kita tidak 
akan mentrigger sebuah error terjadi, atau istilahnya
adalah melempar error (throw error)
untuk melempar error, kita bisa menggunakan kata kunci throw
diikuti dengan instance object errornya
jika terjadi error, maka otomatis kode program kita akan terhenti
dan kita bisa melihat detai error di console di aplikasi browser kita.
*/

// contoh kode Throw

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

const sum = MathUtil.sum(1, 1, 1, 1, 1, 1);
console.info(sum);

// kode eror yang dieksekusi
console.info(MathUtil.sum());
