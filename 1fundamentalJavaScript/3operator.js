/**
 Operator 
    Operator adalah sebuah simbol yang memberi tahu interpreter untuk melakukan operasi
    seperti operasi matematika, relasional, atau logika untuk memberikan hasil tertentu.

Assignment Operator 
    e = y; // artinya nilai x samdengan nilai y
    x += y; // artinya -> x = x + y;
    x -= y; // artinya -> x = x - y;
    x *= y; // artinya -> x = x * y;
    x /= y; // artinya -> x = x / y;
    x %= y; // artinya -> x = x % y;

Comparison Operator
    Comparison Operator adalah operasi komparasi / operasi perbandingan yang dapat mebandingkan dua nilai.
    berikut daftar operator dan fungsinya : 
    ==                  membandingkan kedua nilai apakah sama ( tdk identik)
    !=                  membandingkan kedua nilai apakah tidak sama ( tdk identik)
    ===                 mebandingkan kedua nilai apakah identik
    !==                 membandingka kedua nilai apakah tidak identik
    >                   membandingka dua nilai apakah nilai pertama lebih besar dari nilai kedua
    >=                  membandingkan dua nilai apakah nilai pertama lebih besar atau sama dengan dari nilai kedua
    <                   membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua
    <=                  membandingkan dua nilai apakah nilai pertama kurang dari atau sama dengan nilai kedua.
    
Logical Operator
Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih 
dalam menetapkan logika.
OPERATOR                DESKRIPSI
&&                      Operator dan(and). Logika kan bernilai true jika semua kondisi benar.
||                      Operator atau(or). Logika bernilai true jika salah satu kondisi bernilai benar
!                       Operator tidak(not). digunakan untuk membalikan suatu kondisi/nilai.

*/

//comparison operator
let aa = 10;
let bb = 12;
console.log(aa < bb);
console.log(aa > bb);

// //Logical Operator
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false