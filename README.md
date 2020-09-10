# TypeScript

## 1강 소개 및 개발환경 구성

### 개요

- 자바스크립트의 상위 집합
- 정적인 언어, 컴파일 시간에 타입을 검사 vs 동적인 언어인 Javascript
- 장점
  - 강력한 타입으로 대규모 어플리케이션 개발에 용이
  - JS 라이브러리 사용 가능
  - 개발 도구에서의 강력한 지원

### 개발환경

- Nodejs 설치
- vsCode

  - setting에서 enable `Breadcrumbs`: 파일 내에서 다른 파일로 이용 용이

- `npm install -g typescript`: tsc 명령어
  - `tsc hello.ts` -> `hello.js` 생성

<br/>

## 2강 타입스크립트 컴파일러

- nodejs 프로그램이라 nodejs가 설치되어 있어야 사용가능하다.

- `tsc hello.ts`
  - es5 문법 기준으로 `hello.js`가 생성된다
  - 구현 브라우저에 대응하기 위해서
- `tsc hello.ts --target es6`
  - es6 JS 코드로 변환
- `tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom`

  - lib 옵션 추가: type을 어디까지 쓸 것인지 직접 세팅할 수 있다.

- 모듈 제어 방법

  - `target` = es6, `module system` = commonJS
  - `tsc hello.ts --target es6 --lib es2015,dom --module commonjs`

- ts 컴파일 설정 파일
  - 옵션을 지정할 수 있다.

<br/>

## 3강 타입스크립트 컴파일러 설정

### tsconfig.json

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "target": "es5",
    "sourceMap": true,
    "removeComments": true,
    "noImplicitAny": true // 함수 파라미터로 any가 오는 것을 방지
  }
}
```

### dist

- webpack으로 하나의 js파일로 bundling
- es6 혐태로 사용하고 싶은 경우
  - 각 import 항목의 파일명에 `.js` 추가하기
  - `tsconfig.json`에서 `module`, `target` = es6
  - `index.html`의 script tag에서 `type="module"` 추가하기

<br/>

## 4강 변수선언

- | var            | let         | const       |
  | -------------- | ----------- | ----------- |
  | function scope | block scope | block scope |

- ```javascript
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i); // outputs 3
    }, 1000);
  }
  ```

- type annotation

  - Cannot find name 'score'. Did you mean 'score1'?

  - Type 'string' is not assignable to type 'number'.

  - ```typescript
    let scoreOld; // 'any' type
    let score: number; // used type annotation
    const score1 = 30; // no need for type annotation
    score = 30;
    score = "30";
    ```
