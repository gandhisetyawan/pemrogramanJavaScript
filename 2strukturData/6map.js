/**
 Map 
    map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya object.
    yang mebedakan dengan object, key dalam map membolehkan tipe data apapun.
    
    - mendefinisikan map gunakan constructor :
        const myMap = new Map();
    
    - Apabila ingin menetapkan nilai dari map secara langsung , gunakan array multi dimensi seperti berikut :
        const myMap = new Map([
            ['1', 'a String key'],
            [1, 'a number key'],
            [true, true]
        ]);
    
    - mengakses map dengan key dengan method get().
        console.log(nameMapVariabel.get("key"));
    
    - menambahkan pasangan key -value pada map dengan method set().
        nameMapVariabel.set("key", "value");
        

 */

//membuat map
    const myMap = new Map([
        ['1', 'a String key'],
        [1, 'a number key'],
        [true, true]
    ]);

//akses map dengan method get()
    console.log(myMap.get(1)); // key dengan tipe data number
    console.log(myMap.size);

//menambahkan pasangan key-value ke map dengan method set()
    myMap.set("keyNewData2", "newValueData2");
    console.log(myMap);
    console.log(myMap.size);