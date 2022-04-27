//this di scop global atau object global
// var a = 10;
// console.log(this);

/*Membuat object dengan cara :
    - function declaration 
    - object literal
    - constructor
*/

//function declaration 
    function halo() {
        console.log(this);
        console.log('halo');
    }
    this.halo();
    //this pada function declaration, mengembalikan object global

//object literal
    // const obj = {
    //     a : 10,
    //     name : 'gandhi',
    //     sapa : () => {
    //         console.log('helo saya gandhi')
    //     }
        
    // };
    // obj.halo = function() {
    //     console.log(this);
    //     console.log('halo');
    // }
    // obj.halo();
    // obj.sapa();
    //this pada object literal , mengembalikan object yang bersangkutan / object itu sendiri.

//constructor
    // function halo(){
    //     console.log(this);
    //     this.from = 'pengirim@dicoding.com';
    // }
    // const data1 = new halo();
    // console.log(data1);
    
    //this pada conctructor, mengembalikan object yang baru dibuat.