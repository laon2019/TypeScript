/*
1. node.js 설치
2. vscode 터미널 오픈
3. npm install -g typescript
4. index.ts 파일 생성
5. tsconfig.json 파일 생성 (컴파일시 옵션설정)
6. 
{
    "compilerOptions": {
        "target": "es5",      //버전
        "module": "commonjs",  //문법
    }
}
tsconfig.json 파일에 붙여넣기
7. 터미널에 tsc -w 입력하기(typescripte는 브라우저가 인식 못해서 명령어 입력하면 알아서 변환해줌)
*/


//1. 변수 종류(string, number, boolean, null, undefined 등등)
let test1 :string = 'kim';

//2. array
let test2 :string[] = ['kim', 'park'];

//3. object (물음표를 넣으면 들어올 수도 있고 안 들어올 수도 있다.)
let test3 :{ name? : string} = {name : 'kim'}

//4. Union type(다양한 타입)
let test4 :string | number = 'kim';

//5. Type alias (타입은 변수에 담아쓸 수 있음) 타입은 보통 첫글자 대문자
type Test5 = string | number;
let test5 :Test5 = 123;
 
//6. 함수 (1. 파라미터 number 2. return값으로 number)
function 함수(x : number):number{
    return x * 2
}
//함수('길동이'); 에러

//7. array에 쓸 수 있는 tuple 타입 
type Member = [number, boolean];
let john:Member = [123, true]

//8. object에 타입지정해야할 속성이 너무 많으면
type Member1 ={
    [key :string] : string,
}
let john1:Member1 = {name : 'kim', age : '123'}

//9. class
class User{
    name3 :string;
    constructor(name3 :string){
        this.name3 = name3;
    }
}

//10. 접근제한자 public, protected, private(private 변수는 앞에 _를 붙힘)

//11. 메소드 = 클래스 안에 선언된 함수

let a :number = 20;
let b :number = 10;
[a,b] = [b,a];
console.log(a, b);

function isPositive(number, resolve, reject){
    setTimeout(() => {
        if(typeof number === "number"){
            resolve(number >= 0 ? "양수" : "음수");
        } else {
            reject("주어진 값이 숫자형 값이 아닙니다.");
        }
    }, 2000);
}

function isPositiveP(number :number){
    const executor = (resolve, reject)=>{
        setTimeout(()=>{
            if(typeof number === "number"){
                resolve(number >= 0 ? "양수" : "음수");
            } else {
                reject("주어진 값이 숫자형 값이 아닙니다.");
            }
        },2000);
    };
    const asyncTask = new Promise(executor);
}
