/**
 - OOP (OBJECT ORIENTED PROGRAMMING) 
   Adalah Salah satu paradigma dalam dunia pemrograman komputer.
   Ia adalah pendekatan berbasis object , yang mana suatu object terdiri dari
   Kumpulan beberapa Atribut dan Method di dalamnya.
   - Atribut : variabel yang digunakan menyimpan nilai.
   - Method  : fungsi yang di gunakan untuk menjalankan proses.
   
 - OOP Mempunyai 4 pilar utama :
    - encapsulation 
    - abstraction 
    - inheritance
    - polymorphism 
 */
//object
/*
Contoh object di bawah memiliki :
- atribut dengan tipe data string ( from )
- dan sebuah function atau Method (sendMessage)
*/
const mail = {
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
  }
};

mail.from = "pengirim2@mail.com"; //mengubah nilai atribut from pada object mail
mail.saveContact = function(addr) {
  console.log(`email saved ${addr}`);
}//menambah method/function baru pada object mail

//tampilkan atribut
console.log(mail.from);

//tampilkan method/function 
mail.sendMessage('apakabar', 'penerima@dicoding.com');
mail.saveContact('aas11@mail.com'); 

/* object di atas adalalah contoh penulisan dengan gaya object literal,
    yaitu object dengan langsung menuliskan key dan value pada object yang di buat.
    HAL TERSEBUT BELUM SEPENUHNYA MERANGKUM KONSEP OBJECT DALAM OOP.

*/