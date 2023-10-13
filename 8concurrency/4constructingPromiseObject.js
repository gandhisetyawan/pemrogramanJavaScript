/**
 * Constructing Promise Object
 * Promise merupakan object yg digunakan untuk proses komputasi di tanguhkan
 * dan berjalan asynchronous 
 */

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/

/**
 * Executor function memiliki dua parameter , yaitu resolve dan reject yang berupa fungsi.
 * resolve() : paramater ini dapat menerima satu parameter , biasanya di pakai ketika promise berhasil.
 *             dari pending ke fulfilled
 * reject()  : parameter dapat menerima satu parameter , dan di gunakan untuk alasan kenapa  promis tidak terpenuhi.
 *             dari pending ke reject
 */