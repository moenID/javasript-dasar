/*
Super Method
Selain digunakan untuk memanggil constructor milih parent class,
kata kunci super juga bisa digunakan untuk mengakses method parent class
caranya bisa menggunakan super titik nama functionnya
dengan kata lain, super sebenarnya adalah reference ke parent prototype,
mirip seperti _proto_
*/

// contoh kode super method 

class Shape {
    paint() {
        console.info("Paint Shape");
    }
}

class Circle extends Shape {
    paint() {
        super.paint(); // memanggil method paint() dalam parent class
        console.info("Paint Circle");
    }
}

const circle = new Circle()
circle.paint();