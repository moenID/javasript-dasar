/*
Static Method
kata kunci static juga tidak hanya bisa ditambahkan di field,
tapi juga bisa di method.
jika kita menambahkan pada method, artinya method tersebut jadi milih classnya
bukan prototype
dan untuk mengakses method tersebut, kita juga bisa lakukan 
seperti mengakses static class field.
*/

// contoh kode static method

class MathUtil {

    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const sum = MathUtil.sum(1, 1, 1, 1, 1, 1);
console.info(sum);