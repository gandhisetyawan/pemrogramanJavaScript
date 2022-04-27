/**
 Closure 
    suatu function yang dapat mengakses variabel di dalam lexical scopenya disebut closure.
    Lexical scope berati berada pada sebuah function bersarang, fungsi yang berada di dalam memiliki 
    akses ke variabel di lingkup induknya.

Javascript tidak memiliki cara untuk mendeklarasikan sebuah fungsi atau variabel menjadi private.
closure memungkinkan kita membuat fungsi atau variabel solah private
 */

//closure
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}
init();

// lexical scope
/*
- Fungsi initEx() memiliki variabel local name dan fungsi greet()
- Fungsi greet() adalah fungsi inner function yang di definisikan di dalam fungsi initEx()
    Dan hanya bisa di akses dari dalam fungsi initEx()
- fungsi greet tidak memiliki variabel lokal, karena inner function memiliki akses ke 
    variabel di parent Function-nya.
    Jadi fungsi greet() dapat mengakses variabel name ,itulah lexical Scope.
*/
function initEx() {
    var name = 'Gandhi';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

let myFunction = initEx();
myFunction();

//closure memungkinkan kita membuat fungsi atau variabel seolah private

let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());


/* output
1
2
3
 */