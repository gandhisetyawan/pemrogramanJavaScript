/**
* Contoh pengujian dengan package jest : 

    //format
    test('deskripsi dari testcase kamu', () => {
        expect(perintah).matcher(nilai yang diekspektasikan);
    });

    // contoh
    test('dua tambah dua adalah empat', () => {
        expect(2+2).toBe(4);
    });

Note : - expect(2+2) : berisi perintah yang menghasilkan nilai balik.
                        dapat berupa function atau perintah langsung.

       - toBe(4) : disebut matchers, berisi nilai yg diharpakan dari perintah sebelumnya.


di jest terdapat beberpa matchers yg dapat di gunakan sbb : 
    - toBe(x)       : nilai ekspetasi yang diharapakan adalah x.
    - toEqual(x)    : nilai expetasi yg diharapkan sama dengan x.
    - toBeNull()    : bahwa nilai expetasi yang di harapakan adalah null.
    - toBeTruthy()  : bahwa nilai expetasi yg di harapakan adalah truth.
    - toBeFalsy()   : bahwa nilai expteasi yg di harapakan adalah false.


 */
