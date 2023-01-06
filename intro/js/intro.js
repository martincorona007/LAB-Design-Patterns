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
// ============ mutabilidad y immutabilidad
//mutabilidad =  when the items insede of an object can be  change 
//immutabilidad = when the items insede of an object do not change
let a = ['d','c','a','b'];
a.forEach((a)=> console.log(a.toLocaleUpperCase()));
//console.log(a);
//console.log(a.sort())
// ============ map method
let newArray = a.map((a)=> a.toLocaleUpperCase()).sort();
console.log(newArray);
console.log(a);
// ============ reduce
let nums = [3,7,5,9,2,4,6];
let total = nums.reduce((it,element) =>{
  return it + element;
},0);
console.log("R = ",total);
// ============ class
class Car{
  constructor(name){
    this.nameCar = name;
  }
  getName(){
    return "The name is "+this.nameCar;
  }
}
const obj1 = new Car("Lambo");
console.log(obj1.getName());
// ============ function
function Car2(name){
  this.name = name;
  this.getName = function(){
    return "The name is "+this.name;
  }
}
const obj2 = new Car2("Mc Laren");
console.log(obj2.getName());
// ============ Herencia

class Verificacion extends Car{
  constructor(name,price){
    super(name);
    this.price = price;
  }
  getInfoDad(){
    return "The price for "+ super.getName()+" cost "+this.price; 
  }
}

const obj3 = new Verificacion("Audi",5000);
console.log(obj3.getInfoDad());