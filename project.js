function storm(){
   let a=10;
  return function(){
    a += 1
    return a;
  }
}
let b = storm();
console.log(b());
console.log(b());
