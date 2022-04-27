/**
 class 
    - class adalah hal yang sangan penting dalam pemrograman berorientasi object.
        karena class menyediakan informasi tentang suatu object.

    - jadi bisa dikatakan object adalah instance dari sebuah class.
    - class dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan
        karakteristik dari sebuah object.

    ex : misal terdapat blueprint untuk mendefinisikan object Mail, yang mana sms dan postman adalah 
            object dari class Mail.

    - dalam Class dapat terdiri dari properti dan method.
        -properti adalah karakteristik dari class
        -method adalah kemampuan yang di miliki class.
    - penulisan class pada javascript ada dua cara, 
        sintaks function atau class

 */

// // membuat class dengan sintaksis function - pendekatan prototype
//     function Mail() {
//         this.from = 'pengirim@dicoding.com';
//     };
//     Mail.prototype.sendMessage = function n(msg, to) {
//         console.log(`you send: ${msg} to ${to} from ${this.from}`);
//     };
    
    //panggil
    // const mail1 = new Mail(); //instantiate object dari class Mail
    // mail1.sendMessage('hello, apakabar kamu ?', 'gandhi@mail.com');
    /*disarankan menggunakan pendekatan prototype
        - Karena ketika meng-instantiate ke objeck-object lain, atribut tidak di copy-kan ke setiap object-object .
        jadi lebih menghemat memory  
    */
    // console.log(mail1.hasOwnProperty('sendMessage')); // false


//membuat class dengan sintaksis function - tanpa pendekatan prototype
    // function Mail(){
    //     this.from = "pengirim@dicoding.com",
    //     this.sendMessage = function(msg, to) {
    //         console.log(`you send: ${msg} to ${to} from ${this.from}`);
    //     } 
    // };
//memanggil class
    // const mail1 = new Mail();
    // mail1.sendMessage('hallo', 'penerima@dicoding.com');

//membuat class dengan sintaksis class - pada dasarnya menggunakan prototype
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}

// //memanggil class
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
