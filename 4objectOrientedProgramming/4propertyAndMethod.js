// PROPERTY DAN METHOD
/** Property
        - Property adalah atribut sebuah object.
        - Property dapat berupa : 
            - tipe data primitif
            - object
            - fungsi/method

// cara 1
    class Mail {
        constructor() {
            this.from = 'pengirim@dicoding.com';
            this.contacts = [];
            this.yourOtherProperty = 'the values';
        }
        sendMessage(msg, to) {
            console.log(`you send: ${msg} to ${to} from ${this.from}`);
            this.contacts.push(to); // menyimpan kontak baru
        };
    }
 
// cara 2
    function Mail() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherPrototype = 'the values';
    };
    
    Mail.prototype.sendMessage = function (msg, to) {
        console.log(`you send: ${msg} to  ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };

    Yang perlu diingat, this merupakan representasi bahwasanya variable yang ditunjuk adalah 
    atribute yang bersifat global dan menempel dengan objek tersebut. 
    Sehingga, variabel dapat diakses dari 
    method ataupun property di dalam kelas tersebut dengan menambahkan this di depannya.

 */
// example
// class Mail {
//     constructor() {
//         this.from = 'pengirim@dicoding.com';
//         this.contacts = [];
//     }
//     sendMessage(msg, to, from) {
//         console.log(`you send: ${msg} to ${to} from ${from}`);
//         // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
//         this.contacts.push(to);
//     };
// }

// const mail1 = new Mail();
// mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
// console.log(mail1.contacts);


/*
Note : Dari contoh di atas , jika ingin  akses atribut global dari sebuah class maka harus menggunakan :
this.attributeName
ex : console.log(`you send: ${msg} to ${to} from ${this.from}`);
*/ 

/*
Dalam OOP , property di bagi menjadi 2 :
    - internal interface : method dan property yg dapat di akses method lain namun tidak bisa 
                            di ambil dari luar class tersebut. 
    - external interface : method dan property yang dapat di akses dari luar class itu sendiri.
*/

/*
Dalam Javascript terdapat 2 jenis akses identifier untuk sebuah filed :
- Public  : dapat di akses dari manapun.
- Private : hanya dapat diakses dari dalam class itu sendiri.

Secara default, semua attribut yang di definiskan adalah public.
sehingga semua attribut tersebut dapat di akses oleh object yang telah meng-instansiasi class tersebut.

 */

/** Method
Class Method : function atau method yang ada di dalam class.
                Untuk menggunakan-nya , sebuah class harus di instantiate dulu menjadi object 
                baru bisa di jalankan. 

 */
// contoh kita harus meng instantiate class Mail baru bisa gunakan metod sendmessage
// class Mail {
//     constructor() {
//         this.from = 'pengirim@dicoding.com';
//         this.contacts = [];
//     }
//     sendMessage(msg, to) {
//         console.log(`you send: ${msg} to ${to} from ${this.from}`);
//         this.contacts.push(to);
//     };
// }
// const mail1 = new Mail(); //instantiate
// mail1.sendMessage('hallo', 'penerima@dicoding.com');

/** Method
 * Static Method : function atau method yang sama seperti class method,
 *                  Namun untuk mengunakanya tidak perlu meng-instantiate class.
 *                  Cukup menuliskan nameClass.nameMethod 
 */
// example:
// class Mail{
//     static isValidPhone(phone) {
//       return typeof phone === 'number';
//     }
//   }

// Mail.isValidPhone(145454011); // true

/* Constructor 
        Constructor Adalah sebuah function/Method yang di jalankan pertama kali 
        ketika sebuah object dibuat.

*/
// Construktor dengan class / cara 1
// class Mail {
//     constructor(author) {
//         this.from = 'pengirim@dicoding.com';
//         console.log('is instantiated', author);
//     };
// }

// Constructor dengan function /cara2
// function Mail(author) {
//     this.from = author;
//     console.log('is instantiated cara2', author);
// }

//panggil cara1 / cara2
// const mail1 = new Mail("emailku@dicoding.com");
