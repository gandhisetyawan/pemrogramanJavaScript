/*
Reusable function

menggunakan reusable Function bawaan javascript
Khusnya higher order function yg di miliki array seperti : 
map,filter,forEach

*/  

/* Array Map
function array.map() merupakan fungsi bawaan dari array yg sangat berguna dan bayak sekali kegunaan.
fungsi ini dapat di panggil pada tipe data array dan menerima satu buah callback function

fungsi map akan mengembalikan array baru.
nilai tiap item pada array yg di kembalikan ,di hasilkan dari kembalian callback functionnya.

 */
  //['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });

  const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

  console.log(newArray);

  /**
   * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ] // array baru
   * 
   */

/*Array Filter
fungsi ini berguna untuk proses penyaringan(filtering) terhadap nilai array yg ada.
cara kerja hampir sama dengan array.map(), namun pada array filter callback function harus mengembalikan bolean.
yg mana bolean di gunakan untuk menentukan item array lulus saring atau tidak.

sama seperti array.map() array filter juga mengembalikan array baru
*/

  //ex1
  const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

  console.log(truthyArray);

  /**
   * output:
   * [ 1, 'Hallo', 'Harry', 14 ]
   * 
   */

  //ex2
  const students = [
      {
        name: 'Harry',
        score: 60,
      },
      {
        name: 'James',
        score: 88,
      },
      {
        name: 'Ron',
        score: 90,
      },
      {
        name: 'Bethy',
        score: 75,
      }
  ];
    
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

  console.log(eligibleForScholarshipStudents);

  /**
   * output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */
   
/*Array reduce
Callback function dari fungsi ini dapat diolah untuk manipulasi 
data currentValue dan menyimpannya pada accumulator. 
Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.
*/
/**
array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue]) 
[...] adalah opsional parameter
 */

  const students1 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

  const totalScore = students1.reduce((acc, student1) => acc + student1.score, 0);

  console.log(totalScore);
  
  /**
   * output:
   * 313
   * 
   */

/** Array Some
   array.some() 
   fungsi ini akan menghasilkan nilai bolean.

   Nilai yg di hasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan
   nilai dalam array tersebut lolos berdasarkan kriteria yg kita tuliskan dalam callback function.
  
   */
  //ex : contoh misalkan untuk mengetahui apakah dalam array ada nilai genap atau tidak.
  const array = [1, 2, 3, 4, 5];
  const even = array.some(element => element % 2 === 0);
  
  console.log(even);
  
/** 
  output true
  **/

/** Array Find
  digunakan untuk mencari apakah dalam deret nilai terdapat nilai yg sesuai dengan kriteria
  yang kita definisikan pada callback function.

  pada array find akan menghasilkan satu nilai dari elemen yg pertama kali ditemukan berdasarkan 
  kriteria tertentu dan akan menghasilkan  nilai undefine jika tidak ada kriteria yg terpenuhi pada item array.
  
  arr.find(callback(element, [index], [array]), [thisArg]);
  // [...] adalah opsional parameter
  
*/
  // ex mencari nama
  const students2 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = students2.find(student => student.name === 'James');
  console.log(findJames);
  
  /**
  output
  { name: 'James', score: 88 }
  **/

/** Array Sort 
  array.sort() digunakan untuk pengurutan nilai dari deretan nilai.
  secara default fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string,
  dan mengurutkan secara ascending.

  arr.sort([compareFunction])
  // [...] adalah opsional parameter

*/
  // ex 
    const months = ['A','March', 'Jan', 'Feb', 'Dec','AAAA'];
    months.sort();
    console.log(months);
    // output: [ 'A', 'AAAA', 'Dec', 'Feb', 'Jan', 'March' ]

    const array1 = [1, 30, 4, 1000, 101, 121];
    array1.sort();
    console.log(array1);
    // output: [ 1, 1000, 101, 121, 30, 4 ]

    //Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string
    //untuk mengurutkan nilai bedasarkan kriteria yg kita inginkan maka perlu membuat compare function sendiri.

    const array2 = [1, 30, 4, 1000];

    const compareNumber = (a, b) => {
      return a - b;
    };
    const sorting = array2.sort(compareNumber);
    console.log(sorting);

    /**
    output
    [ 1, 4, 30, 1000 ]
    **/

/**
 Array every 
 erray.every() adalah function bawaan dari array yg digunakan mengechek 
 apakah semua nilai dari array sesuai dengan kriteria yang didefinisikan
 kembalian array.every() adalah bolean.
 arr.every(callback(element, [index], [array]) 
 */
  // ex cek nilai siswa sudah lulus semua 
  const scores = [70,85,90];
  const minimumScore = 65;

  const examPassed = scores.every(score => score >= minimumScore);
  console.log(examPassed);

  /**
  output
  true
  **/

/**
 Array forEach 
 fungsi baawan dari array berfungsi untuk memanggil fungsi callback pada setiap iterasi index array
 fungsi ini tidak mengembalikan nilai apapun.
 jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback nya saja.

 Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array 
 secara imperatif menjadi deklaratif.
 */
//cara imperatif 
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}!`);
// }

//cara deklaratif
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// names.forEach((name) => {
//   console.log(`Hello, ${name}!`);
// });

/*
Namun, ketahuilah bahwa ketika menggunakan forEach, 
kita tidak bisa menggunakan operator break atau continue pada proses perulangan 
(Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter. 
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
//pakai imperatif
for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
// //pakai deklaratif tidak bisa 
// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });