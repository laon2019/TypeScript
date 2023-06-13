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
let test1 = 'kim';
//2. array
let test2 = ['kim', 'park'];
//3. object (물음표를 넣으면 들어올 수도 있고 안 들어올 수도 있다.)
let test3 = { name: 'kim' };
//4. Union type(다양한 타입)
let test4 = 'kim';
let test5 = 123;
//6. 함수 (1. 파라미터 number 2. return값으로 number)
function 함수(x) {
    return x * 2;
}
let john = [123, true];
let john1 = { name: 'kim', age: '123' };
//9. class
class User {
    name3;
    constructor(name3) {
        this.name3 = name3;
    }
}
//10. 접근제한자 public, protected, private(private 변수는 앞에 _를 붙힘)
//11. 메소드 = 클래스 안에 선언된 함수
let a = 20;
let b = 10;
[a, b] = [b, a];
console.log(a, b);
function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === "number") {
            resolve(number >= 0 ? "양수" : "음수");
        }
        else {
            reject("주어진 값이 숫자형 값이 아닙니다.");
        }
    }, 2000);
}
function isPositiveP(number) {
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number >= 0 ? "양수" : "음수");
            }
            else {
                reject("주어진 값이 숫자형 값이 아닙니다.");
            }
        }, 2000);
    };
    const asyncTask = new Promise(executor);
}
