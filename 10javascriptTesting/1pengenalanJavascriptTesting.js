/**
 * Jenis pengujian dalam pengembangan perangkat lunak secara umum 
 * dapat di bagi menjadi 4 jenis pengujian : 
 *  - static test
 *      memastikan tidak ada typo ( nameing convention yang standar),
 *      dan memastikan tidak adanya error types.
 *  - Unit test
 *      memastikan setiap unit kode yg di tulis sudah bekerja sesuai harapan.
 *      unit sendiri merupakan komponen terkecil yg dapat di uji secara terisolasi dalam perangkat yg di buat.
 *      bisa function , class . dan dapat di otomatiskan.
 *  - Integration test
 *      memastikan serangkain fungsi yang saling ketergantungan satu sama lain berjalan semestinya.
 *      proses ini dapat di otomatiskan.
 *  - End-to-end test
 *      pengujain aplikasi dari flow awal sampai akhir.
 *      layaknya user saat mengiji aplikasi.
 *      bisa otomatis maupun manual oleh user.
 * 
 * Beberapa poin yang harus di definisikan dalam kasus pengujian :
 *  - apa yang ingin di uji :
 *      Misal : pengujian menghitung rata-rata nilai siswa.
 *  - ekspetasi yang di harapkan :
 *      untuk kasus menghitung rata-rata nilai :
 *          - menghasilkan output perhitungan yang sesuai berdasarkan input yang di berikan.
 *          - input harus angka
 * 
 */