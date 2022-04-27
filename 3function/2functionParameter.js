/**
 Parameter Function
    - parameter dalam function dapat berupa tipe data apapaun, mulai dari string, number, object bahkan function lain
      Jika parameter function berupa object bisa melakukan destructuring 

    - Default Parameter
        function pada javascript tidak melakukan pengecekan terhadap jumlah ataupun tipe arguman yang di masukan
        pada parameter. ini kita bisa memasukan argumen meskipun tak sesuai dengan parameter 
        yang telah didefinisikan.

        Untuk itu perlu default Parameter
            nilai default ini akan digunakan ketika argumen yang di masukan pada parameter tak di masukan.

    - rest parameter
        rest parameter di tuliskan dengan three consecutive dots (...)
        dengan rest parameter kita dapat menggabungkan beberapa element menjadi satu array.
        ini bermanfaat ketika sebuah function menerima parameter yang tidak pasti 

 */

//object
// const user = {
//     id: 24,
//     displayName: 'kren',
//     fullName: 'Kylo Ren',
// };

//function dengan parameter object
// function introduce({displayName, fullName}) {
//     console.log(`${displayName} is ${fullName}`);
// }
//panggil function dengan argumen 
// introduce(user);

//function dengan default parameter
// function exponentsFormula(baseNumber, exponent = 2) {
//     let result = baseNumber ** exponent;
//     console.log(`${baseNumber}^${exponent} = ${result}`);
// }

// exponentsFormula(3);

//function dengan rest parameter
// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;

// }

// console.log(sum(1, 2, 3, 4, 5));

// contoh modif function
function hargaDetail1(){
    return 50000;
}
function hargaDetail2(){
    return 70000;
}

function subTotalHarga(hargaDetail1,hargaDetail2){
    console.log(hargaDetail1+hargaDetail2);
}
subTotalHarga(hargaDetail1(),hargaDetail2());