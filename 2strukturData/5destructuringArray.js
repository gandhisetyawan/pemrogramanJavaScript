/**
 Destructuring Array
    destructuring Array bekerja berdasarkan posisi.
    const [variabel1, variabel2, variabel3, variabel_n] = nameVariabelArray;

    Note : untuk penamaan variabel bebas, yang terpenting urutan ketika deklarasi variabel saja.

    kita dapat memilih nilai pada index tertentu untuk destructuring pada array.
    ex ketika hanya ingin mengambil nilai ke 3 , kita tak perlu menyiapkan variabel lokal untuk 1 ,2 atau 4
    format : const [, , variabel ] = nameVariabelArray;

Destructuring Assignment
    [variabel1, variabel_n] = nameVariabelArray;


Default Values
    const [variabel1, variabel2 = "DefaultValue"] = nameVariabelArray
 */

//destructuring Array semua nilai array
    const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
    
    const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
    
    console.log(firstFood);
    console.log(secondFood);
    console.log(thirdFood);
    console.log(fourthFood);

// destructuring Array bagian tertentu
    const [, , thirdFoodData ] = favorites;
    
    console.log(thirdFoodData);

// Destructuring Assignment
    const Wefavorites = ["Seafood free", "Salad free", "Nugget free", "Soup free"];
    
    let myFood = "Ice Cream";
    let herFood = "Noodles";
    
    [myFood, herFood] = Wefavorites; //Destructuring Assignment

    console.log(myFood);
    console.log(herFood);

        //Array Destructuring Assignment sangat berguna ketika ingin menukar nilai antar dua variabel.
        let a = 1;
        let b= 2;
        
        console.log("Sebelum swap");
        console.log("Nilai a: " + a);
        console.log("Nilai b: " + b);
        
        [a, b] = [b, a]
        
        console.log("Setelah swap");
        console.log("Nilai a: " + a);
        console.log("Nilai b: " + b);


// Default Values
    const Wefavorites2 = ["Seafood free 2", "Salad free 2"];
    const [myFood2, herFood2, girlfriendFoof2 = "Seafood free from myFood1"] = Wefavorites2;

    console.log(myFood2);
    console.log(herFood2);
    console.log(girlfriendFoof2);

    