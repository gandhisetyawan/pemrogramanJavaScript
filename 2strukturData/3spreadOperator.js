/**
SPREAD OPERATOR 
SPREAD OPERATOR PADA ARRAY
    - Spread Operator digunakan untuk menyebarkan nilai array / iterabel object menjadi beberapa elemen.
    penulisan spread Operator dituliskan dengan tiga titik di ikuti nameVariabelArray (...nameVariabelArray)

    - Spread Operator digunakn untuk menggabungkan dua buah array ke array baru.

SPREAD OPERATOR PADA OBJECT LITERAL.
    - Selain pada array, spread operator juga dapat digunakan pada object literals.
        dengan demikian dapat menggabungkan beberapa object dengan kode lebih ringkas.

 */

//Spread operator pada array.
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
    const others = ["Cake", "Pie", "Donut"];

    // console.log(favorites) // biasa tanpa spread operator.

    //menggunakan spread operator
    // console.log(...favorites); // dengan spread Operator.

    // menggabungkan dua buah array tanpa spread operator.
    // const allFavorites = [favorites, others]; // hasil penggabungan tidak gabung menjadi satu. malah menampung dua buah array
    // console.log(allFavorites);

    // menggabungkan dua buah array dengan spread operator
    const allFavoritesWhiteSpreadOperator = [...favorites, ...others]; // hasilnya akan gabung ke satu array baru.
    console.log(allFavoritesWhiteSpreadOperator);

//Spread Operator pada object Literals.
    const obj1 = { firstName: 'Obi-Wan', age: 30 };
    const obj2 = { lastName: 'Kenobi', gender: 'Male' };
    const newObj = { ...obj1, ...obj2};

    console.log(newObj);
