/*
    1.2 Immutability
        - sebuah object tidak boleh di ubah setelah di buat.
        - alih-alih megubah nilai object secara langsung , terapkan perubahan pada nilai return dalam object baru
          ( membuat object baru ).
*/

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);