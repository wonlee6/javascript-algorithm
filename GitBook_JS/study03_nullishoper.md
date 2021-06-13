# Nullish coalescing operator (null 병합 연산자 '??')

> ` a ?? b`

- a가 `null`도 아니고 `undefined`도 아니면 a
- 그 외의 경우 b

> `x = a ?? b`와 동일한 동작을 하는 코드

```js
x = a !== null && a !== undefined ? a : b;
```

```js
let firstName = null;
let lastName = null;
let nickName = '바이올렛';

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? '익명의 사용자'); // 바이올렛
```

### `??`와 `||` 차이

- `||`는 첫 번째 **truthy** 값을 반환
- `??`는 첫 번째 _정의된(defined)_ 값을 반환

> 🕵️‍♂️ `truthy` 란 불리언을 기대하는 문맥에서 true로 평가되는 값입니다.
> 따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가됩니다. 출처 MDN

```js
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
```

`height || 100`은 0을 **falsy** 한 값으로 취급했기때문에 `null` 이나 `undefined를` 할당 한것과 동일하게 처리  
`height ?? 100`에서 `height`이 정확하기 `null`, `undefiend` 일 경우에만 100이 된다.

> 🕵️‍♂️안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못합니다.

```js
let x = 1 && 2 ?? 3; // x
let x = (1 && 2) ?? 3; // o
```

### 요약

- ??는 변수에 기본값을 할당하는 용도로 사용

```js
// height가 null이나 undefined인 경우, 100을 할당
height = height ?? 100;
```
