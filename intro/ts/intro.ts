
interface Product{
  price: number;
  getPrice(): string;
}
class Drink{
  private name: string;
  constructor(name: string){
    this.name = name
  }
  info(): string{
    return this.name;
  }
}
// const drink = new Drink("e");
// console.log(drink.info());

class Snack implements Product{
  name: string;
  price: number;  
  constructor(name:string,price:number){
    this.name = name;
    this.price = price;
  }
  getPrice(): string{
    return "El precio es $"+this.price;
  }
}
class Beer extends Drink implements Product{
  private alcohol: number;
  price: number;

  constructor(name: string,alcohol: number,price: number){
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }
  ingo(): string{
    return super.info()+ " "+this.alcohol;
  }
  getPrice(): string {
    return '$'+this.price
  }
}

const beer = new Beer("erdinger", 8.5,500);
console.log(beer.info());

const products: Product[] = [
  new Beer("corona",4.5,1),
  new Snack("papas",0.5),
  new Beer("heineken",5,1.2),
];
function getPrice(items: Product[]){
  for(const item of items){
    console.log(item.getPrice());
  }
}

getPrice(products);