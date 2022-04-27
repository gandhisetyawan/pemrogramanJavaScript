/*
 Object
    object adalah tipe data yang dapat menyimpan beragam tipe data dan membentuk data yang lebih komplek.

    - Object pada variabel gunakan kurung kurawal {} untuk membuatnya.
    ex : const user = {properti}; 

    - Object berisi key value yg di kenal sebagai properti.
    key     : berperan mirip dengan variabel
    value   : berisi nilai dengan tipe data apapun termasuk object lain.

    - Penulisan properti dalam object sbb :
    let object = {key1: "value1", key2: "value2", key3: "value3"}

    - cara akses object sbb :
        1 dot. ex: namaObject.namaProperti
        2 dengan bracket atau tanda kurung siku. ex: user[“home world”];

    - mengubah nilai properti object
        menggunakan assignment operator (=).

    - Menambah properti baru pada object
        nameObject.NameKey = value;

    - Menghapus properti object
        untuk menghapus pakai keyword delete
        delete nameObject.nameKey;


 */

//object - membuat object dan akses object.
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine",
    data: {
        title: "mengabdi negri",
        subTitle: "indonesia"
    }
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

//modifikasi object
user.age = 27;
user["home world"] = "Tulungagung";
console.log(user);

// menambah properti object.
user.status = "belum kawin";
console.log(user);

//menghapus properti object
delete user.isJedi;
console.log(user);

console.log(user.data);
console.log(user.data.title);
