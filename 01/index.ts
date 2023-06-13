// number
// string
// boolean
// null
// undefined
// any

let a:number = 3;
a=5;
let b:string = "love you"

let c:any = 4
c = "asdfasdf";
let d:number | string = "asdfasd";
// d = null;
d = 3;

let e:string[] = ['apple', 'mongo']
// e.push(3)

function addNumber(a:number,b:number):number{
    return a+b
}
addNumber(3, 7);

// tsc index.ts 
// cmd shif+b