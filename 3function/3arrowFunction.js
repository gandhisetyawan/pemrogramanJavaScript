/**
 Arrow function 
    - penulisan arrow function menggunakan tanda panah (=>)
        - Untuk arrow function hanya berupa expression function saja.
        - Berbeda dengan regular function dapat berupa :
          function declaration atau expression function(anonymous function)

    - pada arrow function tidak perlu menuliskan keyword function
    - format arrow function :
        const sayHello = (greet) => {
            console.log(`${greet}!`)
        }
        
        const sayName = (name) => {
            console.log(`Nama saya ${name}`)
        }
*/
// Arrow Function 
    const sayHello = (greet) => {
        console.log(`${greet}!`)
    }

    const sayName = (name) => {
        console.log(`Nama saya ${name}`)
    }
    sayHello("Hello");
    sayName("Gandhi");

// NOTE Arrow Function
// Apabila hanya memiliki satu parameter maka bisa menghapus tanda kurung bulat()
    const sayNameEx = name => {
        console.log(`Nama saya ${name}`)
    }
    sayNameEx('gandhi ex : use arrow function 1 parameter');
// Apabila tak memerlukan sama sekali paramter maka perlu menuliskan kurung bulat saja()
    const sayNameNotParameter = () => {
        console.log(`welcome to lear javascript . this function not parameter}`)
    }
    sayNameNotParameter();
// Apabila body function hanya satu baris bisa di tulis sbb :
    const sayNameEx1 = name => console.log(`Nama saya ${name}`);
    sayNameEx1("Gnadhi, Example For Function ");

// Apabila sebuah function mengembalikan nilai dan hanya satu baris bisa di tulis sbb:
    // Tidak perlu menuliskan return
    const multiply = (a, b) => a * b;
    console.log(multiply(3, 4));
