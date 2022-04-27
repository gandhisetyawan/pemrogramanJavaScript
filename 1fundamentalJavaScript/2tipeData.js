/**
Tipe Data :
Tipe data adalah klasifikasi data berdasarkan jenisnya.

    - Adapun bebrapa tipe data pada javaScript sbb :
        + Undefined
            tipe data ini tidak memiliki nilai. Artinya tanpa di inisialisasi nilai.
        
        + Numbers
            tipe data angka pada umunya. di tulis biasa : 10, 5, 7,
            jika angka berupa desimal maka gunakan titik untuk pecahan bilanganya. ex 2.5 , 17.25

        + BigInt 
            pada tipe data number hanya mencakup nilai dari -(2^53 - 1) hingga (2^53 - 1).
            Dimana kita membutuhkan cakupan yang lebih tinggi, seperti menentukan waktu hingga presisi microsecond.
        
            Maka dari itu kita memerlukan tipe data BigInt.
            Untuk membedakan tipe data number dan BigInt gunakan n di akhir angka
            const bigNumber = 1234567890123456789012345678901234567890n;
            const myInt = 1234567890123456789012345678901234567890;

        + String
            Tipe data string adalah tipe data text. Untuk inisialisasi nilai string gunakan tanda
            petik satu(') atau petik dua (") di antara text. ex let greet = "hallo"; 

            Pada string juga dapat menggunakan operator (+) untuk gabung dua text atau lebih.   

        + Bolean
            Tipe data bolean dalah tipe data yang hanya memiliki 2 nilai yaitu : true dan false.

        + Null
            Tipe data null adalah tipe data sementara namun tidak ada nilai.

        + Symbol
            Tipe data Symbol adalah tipe data yang di kenalkan pada Es6.
            Tipe data ini dugunakan untuk identifier yang unik.
            Symbol ini umumnya digunakan sebagai nama property dari Object.

*/ 

// Tipe data Undefined
    let x0;
    console.log(typeof(x0));
    /* output: undefined */

// Tipe data Numbers
    let x1 = 10;
    console.log(typeof(x1))
    /* output: number */

    let y = 17.25; // tipe data number berupa decimal.
    console.log(typeof(y))
    /* output: number */

// Tipe Data BigInt
    const bigNumber = 1234567890123456789012345678901234567890n;
    const myInt = 1234567890123456789012345678901234567890;
    console.log(bigNumber);
    console.log(myInt);
    console.log(typeof(bigNumber));

// Tipe Data String
    let greet = "hallo";
    console.log(greet + greet);

// Tipe data Bolean
    let xx = true;
    let yy = false;
    console.log(typeof(xx))
    console.log(typeof(yy))

// Tipe Data null
    let someLaterData = null;
    console.log(someLaterData);

// Tipe Data Symbol
    const id = Symbol("id");    
    console.log(id);

    const id1 = Symbol("id");
    const id2 = Symbol("id");
    console.log(id1 == id2);