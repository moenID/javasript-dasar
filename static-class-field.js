/*
Kata Kunci Static
static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, 
biasanya ketika kita membuat field atau method, maka secara otomatis
field akan menjadi property di instance object, 
dan method akan menjadi function di prototype.
jika kita tambahkan static, maka hal itu tidak terjadi.
*/

/*
Jika kita tambahkan static dalam class field, secara otomatis field tersebut
bukan lagi milik instance object, melainkan classnya itu sendiri.
biasanya static digunakan jika kita ingin membuat utility field atau function.
cara mengakses static class field pun tidak lagi lewat object
melainkan lewat classnya
static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa 
yang mengakses, hasilnya akan sama.
*/

// kode tanpa static class filed

class Pengaturan {
    nama = "Belajar";
    versi = 1.0;
    mushonif = "Adrik";
}

const atur = new Pengaturan();
console.info(atur);

// kode dengan static class filed

class Configuration {
    static name = "Belajar Javascrip";
    static version = 1.0;
    static author = "Misbahul Munir";
}

const config = new Configuration();
console.info(config);

// cara mengakses static class field
console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);

/* 
akses static class field ini juga bersifat global 
sehingga jika kita mengubah nama dari Configuration misalnya
nama tersebut juga akan berubah. 
*/

// contoh kode 
Configuration.name = "Belajar Shorof";
console.info(Configuration.name);
