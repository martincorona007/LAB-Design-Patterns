//First-Class sitizen

function sum(a ,b ){
  return a + b;
}
let res = sum(4,5);
console.log(res);
const fn1 = sum;// assigned to other variable

let res2 = fn1(1,1);//Execute variable
console.log(res2);
//HOF High Order Function