/**
 Destructuring Object
    penulisan destructuring Object pada ES6 Menggunakan object literal({}) disisi kiri dari operasi assignment.
    const {variabel1, variabel2, variabel_n} = nameObjectLiteral;

    NOTE : variabel harus sama dengan properti object.
            lewat variabel ini  nilai-nilai property akan di masukan otomatis.

    Dalam destructuring Object juga dapat menentukan salah satu nilai saja yang di destructuring.
    const {variabel1} = nameObjectLiteral;

Destructuring Assignment
    ({variabel1, variabel_n} = nameObjectLiteral);

    Note : di masukan dalam kurung bulat(). agar tidak di kira blok statement. 
    
Default Values
    ketika mendestructuring object dan menetapkan variabel dengan nama bukan merupakan 
    properti object , maka nilainya akan undefined.

    untuk mengatasi hal tersebut buat nilai default pada nilai properti yang tidak di temukan.



 */

// Destructuring object 
    // const profile = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 18
    // }
    // const {firstName, lastName, age} = profile; // destructuring 
    // console.log(`halo , ${firstName} ${lastName} ${age}`);
    // console.log(firstName,lastName,age);

//Destructuring Assignment 
    const profile1 = {
        firstName1: "John2",
        lastName1: "Doe2",
        age1: 25
    }
    
    let firstName1 = "Dimas";
    let age1 = 20;
    console.log(firstName1);
    
    // menginisialisasi nilai baru melalui object destruction
    ({firstName1, age1} = profile1);
    
    console.log(firstName1);
    console.log(age1);

//default Values.
// const profile2 = {
//     firstName2: "John3",
//     lastName2: "Doe3",
//     age2: 18
// } 
// const {firstName2, age2, isMale2 = false} = profile2; // isMale2 nilai defaul = false

// console.log(firstName2)
// console.log(age2)
// console.log(isMale2)