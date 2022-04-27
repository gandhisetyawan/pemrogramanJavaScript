/**
 Array
    - tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkan pada satu variabel.
    - data array disusun berurutan dan di akses dengan index.
        let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
        console.log(myArray);
        console.log(myArray[1]);

    - jika kita mengakses nilai di luar index maka akan mengeluarkan nilai undefined.
    - menambhakan data ke dalam array.
        gunakan metode push().  fungsi ini akan menambah data di akhir array.
        nameVariabelArray.push(data);
    - mengeluarkan data atau elemen terakhir dari array gunakan pop()
        nameVariabelArray.pop()

    - Metode shift() dan unshift()
        shift() di gunakan untuk mengeluarkan element pertama pada array. format : myArray.shift();
        unshift digunakan untuk menambah elemen di awal array. format : myArray.unshift("databaru");

    - menghapus data dari array
        untuk menghapus gunakan keyword delete
        Format : delete nameVariabelArray[index_ke];

        Namun tidak menghapus elemen hanya di kosongkan.
        Untuk menghapus elemen gunakan splice()
    
    - Menghapus elemen
        untuk menghapus elemen pad array gunakan splice()
        format nameVariabelArray.splice(2,1) // artinya menghapus dari index ke 2 sebanyak 1 elemen.

 */

//membuat array dan akses
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray[5]); //lebih dari nilai indexnya undefined

// menambah data ke akhir array dengan push()
myArray.push("javascript");
console.log(myArray);

//mengeluarkan data array/elemet terakhir dari array.
myArray.pop();
console.log(myArray);

// metode shif() dan unshif()
const myArray1 = ["id1", "gandhi", "setyawan", "software development"];

myArray1.shift(); // mengeluarkan element pertama array
console.log(myArray1);

myArray1.unshift("id0000011"); //menambah elemen di awal array
console.log(myArray1);

//menghapus data pada array.
delete myArray1[2]; // tidak menghapus elemen hanya di kosongkan
console.log(myArray1);

//menghapus elemen 
myArray1.splice(2,2); // ex: myArray1.splice(2,2); - menghapus index ke 2 sebanyak 2 elemen.
console.log(myArray1);
