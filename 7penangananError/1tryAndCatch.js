/**Try and Catch
 * 
*/
try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

/**Note : 
 * Object Error memiliki properti utama sbb :
 * name    = nama error
 * message = pesan detail error
 * stack   = informasi urutan penyebab error ( untk debuging)
*/

/**Try Catch Finally 
 * pada blok finally tetap di jalankan apapaun yg terjadi pada blok try dan catch
*/

try {
    console.log("Awal blok try");
    errorCode; 
    console.log("Akhir blok try");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Akan tetap dieksekusi");
}