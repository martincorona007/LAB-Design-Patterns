// ============ First-Class sitizen

function sum(a ,b ){
  return a + b;
}
let res = sum(4,5);
console.log(res);
const fn1 = sum;// assigned to other variable

let res2 = fn1(1,1);//Execute variable
console.log(res2);

//============ HOF High Order Function

function highFunction( fns, a,b){
  console.log("Executed");
  return fns(a,b);
}
console.log(highFunction(sum,90,90));
// ============ Arrow Function
let ar1 = function(){
  console.log("print..1 ");
}
ar1();
let ar2 = () => {
  console.log("print..2")
}
ar2();
let ar3 = () => console.log("print..3")
ar3()

function calis(fn,a,b){
  console.log(fn(a,b));
}
calis((a,b)=> a*b,3,3);
calis((a,b)=> {
  return a* b;
},3,4);