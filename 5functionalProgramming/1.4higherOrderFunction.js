/*
    1.4 Higher order function
        Javascript memiliki kemampuan first class function ,
        karena itu function pada javascript dapat di perlakukan layaknya data.

        function dapat disimpan pada variabel.
        function dapat dijadkan parameter.
        hingga mengembalikan function di dalam function.


*/

const hello = () => {
    console.log('Hello!')
};
  
const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();
/**
 * Hello!
 * Hello!
 * Hello!
 */

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */