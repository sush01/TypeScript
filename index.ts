
const myName:string = 'Sushila';

const ten: number = 10;
const negative: number = -10000;
const decimal: number = 10.00000001;

const yes: boolean = true;

const nothingHere: null = null;
const noDefinition: undefined = undefined;

const add = (a:number,b:number): number => {
  return a+b;
};

const joinString = (a:string, b:string): string => {
  return a+b;
};

const joinStrings = function(a:string, b:string): string {
  return a+b;
};

const multiply = (a:number,b:number):number => {
  return a+b;
};

//Object 
const post: {title:string, daysOld:number, published:boolean}= {
  title: 'Latest Typescript News',
  daysOld: 10,
  published: true
};

//Interface
interface Post {
  title:string;
  daysOld:number; 
  published:boolean;

}
const printPost = (postToPrint:  Post) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

//Clasess and properties
class Car{
  color: string;
  year: number;

  constructor(color:string, year:number){
    this.color = color;
    this.year = year;
  }

  drive (){
    console.log('Vroom');
  }
}

const myCar = new Car('red',2000);
myCar.drive();
myCar.color = 'green';

//Decorators

