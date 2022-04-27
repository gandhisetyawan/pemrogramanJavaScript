/**
 Loop(perulangan)
    Adapun perulangan antara lain sbb :
        + For Loop
            For adalah salah satu cara perulangan yang sering digunakan
            Struktur for sbb :

            for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
                // do something
            } 
        
        + For of loop
            Cara lain dalam melakukan looping adalah menggunakan for..of. 
            For of mulai hadir pada ECMAScript 2015 (ES6). 
            Cara ini jauh lebih sederhana dan modern dibanding for loop biasa. 
            Sintaks dasar dari for of loop adalah seperti ini:

            for(arrayItem of myArray) {
                // do something
            }

        + While and do-while
            - while
            Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan
            kode di dalam blok while ketika bernilai true. 
            - do-while
            Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, 
            sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan. 
            Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.




*/

//for loop
for(let i = 0; i < 5; i++) {
    // console.log(i + "ada saya");
    console.log(i);
}

//For of loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

//while
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//do while
let ix = 1;

do {
    console.log(ix);
    ix++;
} while (ix <= 3);