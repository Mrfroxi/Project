function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let b = makeCounter();
let counter2 = makeCounter();

console.log( b() ); // 0
console.log( b() ); // 1
console.log(counter2() );
console.log(counter2() ) ;

