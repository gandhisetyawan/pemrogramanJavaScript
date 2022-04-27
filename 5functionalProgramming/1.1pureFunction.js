/*
    1.1 Pure function 
        - pembuatan function harus tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
        - jadi mau seperti apa kondisinya, function yang di buat selalu menghasilkan nilai yang sama.
          kecuali nilai parameter yang berbeda.
        - Pure Function dilarang mengubah nilai diluar fungsinya. ( tidak menimbulkan efek samping).
*/ 
//example 1
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(4)); // 50.24
  console.log(hitungLuasLingkaran(8)); // 200.96
  console.log(hitungLuasLingkaran(8)); // 200.96

//example 2
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};
  
const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/*
Note : 
    1.Mengembalikan nilai yang sama , jika nilai inputan(nilai parameter) sama.
    2.hanya bergantung pada argumen yang diberikan.
    3.Tidak menimbulkan efek samping
    
    bila 3 konsep terpenuhi di pastikan pure function.
*/
