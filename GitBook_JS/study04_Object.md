# Object.keys(), values(), entries()

- map
- set
- array

위 해당되는 곳에서 사용할 수 있다.

- `Object.Keys()` : 객채의 **키** 값만 담은 배열을 반환
- `Object.values()` : 객체의 **값**만 담은 배열을 반환
- `Object.entries()` : **[키, 값]**을 담은 배열을 반환

> 🕵️‍♂️ Object.\*를 호출하면 iterable 객체가 아닌 객체의 한 종류인 배열을 반환한다는 점.  
>  ‘진짜’ 배열을 반환하는 이유는 하위 호환성 때문

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
```

- `Object.Keys(prices)` : `["banana", "orange", "meat"];`
- `Object.values(prices)` : `[1,2,4];`
- `Object.entries(prices)` : `[["banana", 1], ["orange", 2] ["meat", 4]];`

```js
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
```

```js
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}
```

🕵️‍♂️ 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없지만,  
Object.entries와 Object.fromEntries를 순차적으로 적용하면 객체에도 배열 전용 메서드 사용할 수 있다.

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices); // {banana: 2, orange: 4, meat: 8}
```

1. `Object.entries(obj)`를 사용해 객체의 키-값 쌍이 요소인 배열을 얻습니다.
2. 1.에서 만든 배열에 map 등의 배열 전용 메서드를 적용합니다.
3. 2.에서 반환된 배열에 `Object.fromEntries(array)`를 적용해 배열을 다시 객체로 되돌립니다.

```js
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30,
};

console.log(count(user)); // 2
```
