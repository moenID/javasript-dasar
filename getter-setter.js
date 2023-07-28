/*
Getter & Setter
class juga mendukung pembuatan getter dan setter
perlu diingat, getter dan setter ini akan berada di prititype, bukan di instance object.
*/

// contoh kode getter dan setter pada class

class Person {
    constructor(fritsName, lastName) {
        this.fritsName = fritsName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.fritsName} ${this.lastName}`
    }

    set fullName(value){
        const result = value.split(" ");
        this.fritsName = result[0];
        this.lastName = result[1];
    }
}

const munir = new Person("Misbahul", "Munir");
console.info(munir);
console.info(munir.fullName);