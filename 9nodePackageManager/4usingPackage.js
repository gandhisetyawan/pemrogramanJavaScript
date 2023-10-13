/**
 * using package
 *  sebenarnya package yg kita tambahkan dalam project sebuah modul,
 *  jadi untuk menggunakan nya kita harus import
 */


 //tanpa menggunakan package lodash
//  const myArray = [1, 2, 3, 4];
//  let sum = 0;
  
//  for(let i = 0; i < myArray.length; i++) {
//      sum += myArray[i];
//  }
  
//  console.log(sum);

//dengan package lodash
import _ from 'lodash'; //import package

const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);