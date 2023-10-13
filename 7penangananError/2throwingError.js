//Throwing Error

/**
 * Sebelum ke Throwing Error , kita coba dulu try Catch yg lebih umum
*/
//  let jsonXx = '{ "name": "Yoda", "age": 20 }';
 
//  try {
//      let user = JSON.parse(json); 
//      //JSON.parse : di gunakan parsing/konversi dari variabel json(string) menjadi object

//      console.log(user.name);
//      console.log(user.age);
//      console.log(user); // lihat hasil JSON.parse
//  } catch (error) {
//      console.log(error.name);
//      console.log(error.message);
//  }

/**Throw
 * contoh pada kasus di bawah mengharuskan ada properti name pada json.jika tidak program error misalanya.
 * untuk mengatasi hal tersebut pakai throw. sehingga esekusi kode ke blok catch
*/
let json = '{ "name" : "gandhi" ,"age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    errorCode;

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
 
/* output
JSON Error: 'name' is required.
*/
