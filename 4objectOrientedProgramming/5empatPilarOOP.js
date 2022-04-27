/* 4 Pilar OOP :
    - Encapsulation
    - Abstraction
    - Inheritance
    - polymorphism
*/

/* - Encapsulation : atribut atau method di class harus bersifat private.
        Artinya object lain tidak bisa mengakses atau mengubah langsung atribut atau method.
        namun bisa menambhakan atau mengambil melalui fungsi/method lain.
*/
// example Encapsulation :
// class Mail{
//     constructor(author) {
//         this._contacts = [];
//         this.from = author;
//     }
//     sendMessage = function(msg, to) {
//         console.log('you send:', msg, 'to', to, 'from', this.from);
//         this._contacts.push(to);
//     }
//     showAllContacts() {
//         return this._contacts;
//     }
// }
// const mail = new Mail('gandhi');
// mail.sendMessage("apa kabar sayang 1","cintaku1@test.test");
// console.log(mail.showAllContacts());

/* - Abstraction : penerapan alami encapsulation .
        Abstraction hanya menunjukan operasi secara hight - level.
*/

/* - inheritance(pewarisan):
        javascript untuk pewarisan menggunakan keyword extends :
        // cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
        class ChildClassName extends ParentClassName{}
 
        // cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
        ChildClassName.prototype = new ParentClassName()
*/
// Example Inheritance(Pewarisan)

// class Mail sebagai parent/superClass yang mewariskan
class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(name,penulis) {
        super(penulis);
        this.username = name;
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }

}

const wa1 = new WhatsApp('gandhi','setyawan@mail.com'); // instantiate bluprint child Class WhatsApp
console.log(wa1.myProfile()); //akses method childClass
wa1.sendMessage('halo say','ndhi@test.test'); //akses method parentClass

/* - Polymorphism(banyak bentuk) : object dapat memiliki bentuk atau implementasi yang berbeda-beda
                                pada satu metode yang sama.
                                semua bentuk Mail dapat mengirim pesan, namun whatsApp dan email tentu memiliki
                                cara yang berbeda.

*/