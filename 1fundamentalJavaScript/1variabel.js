/*
Variabel untuk menyimpan Nilai / informasi yang akan di kelola sebuah Program.
    - Ada tiga cara untuk mendeklarsikan sebuah variabel :
        var , let , const.

    - Pada EcmaSrcipt 2015(ES6) di kenalkan deklarasi variabel menggunakan let dan const menggantikan var
        yang di anggap kontroversi serta rawan menimbulkan bug.

    ex : 
        let lastName; //declaration statement
        lastName = "setyawan";

    atau langsung seperti berikut :
        let lastName = "setyawan"; //assignment expression

    - Aturan Penamaan Variabel :
        - Harus di awali dengan huruf atau underscore(_).
        - dapat terdiri dari kombinasi huruf ,angka dan underscore.
        - tidak boleh ada spasi. jika lebih dari dua kata gunakan
          camelCase. ex : firstName ,lastName dll.
        - tdk boleh mengandung karakter spesial (! . , / \ + * = dll.)

    - Variabel const atau constanta adalah variabel yang tidak dapat di inisialisasi kembali
        nilainya. Ketika menginisialisasi kembali nilai dari variabel const maka error. 

 */

let lastName;
lastName = "setyawan";
console.log(lastName);

let firstName = "GANDHI";
firstName = "iwan";
console.log(firstName);

const nilai1 = 50;
console.log(nilai1);
//inisialisasi kembali variabel nilai1
nilai1 = 100; //error karena const
console.log(nilai1);

