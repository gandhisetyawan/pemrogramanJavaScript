/**
 Variabel Scope
    - variabel global
        variabel yang di definisikan berada di luar function
    - variabel lokal
        variabel yang di definisikan di dalam function dan cakupanya hanya pada function tersebut
        beserta turunanya.
        
    Sebisa mungkin kita harus menghindari pembuatan variabel global, 
    karena variabel global dapat diakses pada seluruh script yang kita tuliskan. 
    Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision) terjadi.
 */

/*
//Penerapan Scoping Variabel
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    console.log(b);
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
        console.log(c);
    }
}

*/

// Jika Variabel tidak diberikan keyword let,const,var maka variabel tersebut variabel global.
// Dalam pembuatan variabel, sebisa mungkin untuk tidak membuat variabel Global.

