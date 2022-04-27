/**
 Set
    - set adalah kumpulan nilai (set of value). 
        perbedaan set dengan struktur data lainya adalah data pada set ini tidak berurutan dan tidak di index.
        data pada set bersifat unik dan tidak ada duplikasi 
    - format penulisan :
        const variabelNameSet = new Set([value, value, value, value, value]);
        ex : const numberSet = new Set([1, 4, 6, 4, 1]);

    - menambahkan data pada set dengan fungsi add()
        variabelNameSet.add(value);

        note : fungsi add() hanya menerima satu arguman , jika masukan array maka akan di anggap satu elemen
    
    - delete nilai pada set
        variabelNameSet.delete(value); // value adalah nilai yang di hapus, note : bukan index 
*/

//set
    const numberSet = new Set([1, 4, 6, 4, 1]);
    console.log(numberSet);

// menambahkan data pada set
    numberSet.add(7);
    console.log(numberSet);

// menghapus nilai pada set
    numberSet.delete(1); // argumen bernilai 1 adalah nilai dari set yang di hapus. 1 bukan index.
    console.log(numberSet);
    