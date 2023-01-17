class WeekDays{
  //objeto array
  //array
  
  weekEn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  weekSpa = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ]

  constructor(config){
    this.tag = config;
    if(WeekDays.instance){
      return WeekDays.instance
    }
    WeekDays.instance = this;
  }
  getDays(){
    return this.tag === "Es"? this.weekSpa: this.weekEn;
  }
}
const obj =new WeekDays("Ing");
console.log(obj.getDays())
const obj2 =new WeekDays("Es");
console.log(obj.getDays())