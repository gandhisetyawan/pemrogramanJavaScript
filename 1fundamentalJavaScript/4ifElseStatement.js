/**
 if/Else Statement
    Digunakan untuk menentukan keputusan. 
*/

// If/Else Statement
let language = "Japanese";
let greeting = "Selamat Pagi";

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

// ternary operator atau conditional expressions
// condition ? true expression : false expression
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);


/**
Truthy & Falsy
Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. 
Nilai ini dikenal dengan truthy atau falsy.
Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, 
begitu pula falsy bernilai false. 

Jadi manakah yang termasuk truthy dan falsy? 
Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:    
Number 0
BigInt 0n
String kosong seperti "" atau ''
null
undefined
NaN, atau Not a Number
*/

let name = "";
if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}
