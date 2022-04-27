/**
    Beberapa Built-In Class dalam javaScript :
    - Date, Object, Array, Math, String 
    
    Date merupakan built-in object bawaan javascript yang digunakan untuk utilitas terkait 
    Tanggal dan waktu. 


 */

/* 
    Untuk meng-instansiasi Date Object dapat menggunakan 4 cara : 
*/
// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
console.log(myDate);

// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDateInString = new Date(); 
console.log(myDateInString);

// #3 parameter dalam bentuk number, misal 87400000 // kurang tau penggunaan
// const myDateInNumber = new Date(miliseconds); 
// console.log(myDateInNumber);

// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
//kurang tau penggunaan
// const myDateNumber7Parameter = new Date(year,month,date,hour,minute,second,millisecond); 
// console.log(myDateNumber7Parameter);