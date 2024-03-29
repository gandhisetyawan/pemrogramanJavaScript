/**
 * Async - await 
 * sejak es8 kita dapat menuliskan asynchronous proses layaknya synchronous
 */

 const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 5;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }
 
// makeCoffee();


/**
 * Handle onRejected using async-await
 */
 async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
// makeCoffee();

/**
 * Chaining Promise using async-await
 */
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}
 
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    })
}

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 5000);
    });
};

checkAvailability();

async function makeEspresso() {
    try {
        const availability = await checkAvailability();
        console.log(availability);
        const stok = await checkStock();
        console.log(stok);

        const promis = await Promise.all([boilWater(), grindCoffeeBeans()]);
        console.log(promis);

        const coffee = await brewCoffee();
        console.log(coffee);

    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

console.log("data");

makeEspresso();
console.log("daya");