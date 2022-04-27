/**
 Function 
    Function merupakah sebuah variabel yang berisi blok kode logika.
    blok logika akan di eksekusi ketika variabel di panggil.

    - Struktur function sbb :
        nameFunction(parameter1, parameter2){
            return parameter1*parameter2; //kode yang di eksekusi
        }

        Note : - Parameter merupakan variabel yang di definisikan sebagai inputan dari sebuah function
                    function multiply(a, b) {
                        return a * b;
                    } // function

               - Argument merupakan nilai/expresi yang di masukan dalam function.
                    multiply(3, 4); //manggil function 

    - Function dapat mengembalikan nilai. dan nilai kembalian bisa di masukan dalam sebuah variabel.
        Agar bisa mengamblikan nilai gunakan keyword return.
                    function multiply(a, b) {
                        return a * b;
                    }

                    let result = multiply(10, 2)
                    console.log(result)


    - Expression function (anonymous function)
        pada expresion function kita tak perlu menuliskan nama function dan bisa di simpan pada variabel.


 */

//function
    // function greeting(name, language) {
    //     if(language === "English") {
    //         console.log(`Good Morning ${name}!`);
    //     } else if (language === "French") {
    //         console.log(`Bonjour ${name}!`);
    //     } else {
    //         console.log(`Selamat Pagi ${name}!`);
    //     }
    // }

//memanggil Function
    // greeting("Harry", "French");

//expression function
    const greeting2 = function(name, language) {
        if(language === "English") {
            return "Good Morning " + name + "!";
        } else if (language === "French") {
            return "Bonjour " + name + "!";
        } else {
            return "Selamat Pagi " + name + "!";
        }
    }

    console.log(greeting2('Ron', 'English'));
