class Singlenton{
  //random = Math.random();
  constructor(){
    random = Math.random();
    console.log("Reaching contructor")
      if(Singlenton.instance){
        console.log("Already constructed")
        return Singlenton.instance
      }
      console.log("new constructor")
      Singlenton.instance = this
  }
  getInstance(){
    console.log("did you call me?");
    return Singlenton.instance;
  }
}
const obj1 = new Singlenton();
const obj2 = new Singlenton();
const obj3 = new Singlenton();
console.log(obj3.random)
console.log(obj2.random)
console.log(obj1.getInstance());
console.log(obj1 == obj2)