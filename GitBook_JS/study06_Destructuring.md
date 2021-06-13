# Destructuring assignment

> 객체나 배열을 변수로 사용 가능하게 하는 문법

### 1. 배열 분해하기

```js
let arr = ['Bora', 'Lee'];

let [fristName, subName] = arr;
console.log(fristName); // Bora
console.log(subName); // Lee
```

즉,  
`console.log(fristName) // arr[0] `  
`console.log(subName) // arr[1]`

#### 할당 연산자 오른쪽은 모든 이터러블(Iterable) 올 수 있따. (할당할 값)

```js
let [a, b, c] = 'abc'; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

#### 할당 연산자 왼쪽은 뭐든 지 올 수 있다. (호출될 변수명 집합)

```js
let user = {};
[user.name, user.surname] = 'Bora Lee'.split(' ');

console.log(user.name); // Bora
```

### 2. 객체 분해하기

```js
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};
// 위의 객체를 분해하면

let { title, width, height } = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
```

> 객체 안의 value 값을 가져온다.

🕵️‍♂️ 나머지 패턴

```js
const animalList = ['CAT', 'DOG', 'TIGER'];
const [cat, ...restAnimalList] = animalList;
console.log(cat); // CAT
console.log(restAnimalList); // ["DOG", "TIGER"]
```

변수 앞에 ...을 붙여 나머지를 가져 올 수 있다.(가장 마지막 변수에 붙여야함)

🕵️‍♂️ 나머지 패턴과 비슷한 (spread operator)전개 연산자란?

```js
let prevState = {
  name: 'yuddomack',
  birth: '1996-11-01',
  age: 22,
};

let state = {
  ...prevState,
  age: 23,
};

console.log(state); // { name: 'yuddomack', birth: '1996-11-01', age: 23 }
```

객체나 배열을 복사한다.(원본 복사가 아닌 주소 참조한 카피본이라고 생각하자)  
자세한 내용은 다음 시간에...

> 2개의 차이점은 무엇일까 ?

- ...이 함수 호출 시 사용되면 배열을 목록으로 확장해주는 "전개 연산자"
- ...이 함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 "나머지 패턴 (매개변수)"

### 3. 함수

```js
function renderUser({ name, age, addr }) {
  console.log(name);
  console.log(age);
  console.log(addr);
}

const users = [
  { name: 'kim', age: 10, addr: 'kor' },
  { name: 'joe', age: 20, addr: 'usa' },
  { name: 'miko', age: 30, addr: 'jp' },
];

users.map((user) => {
  renderUser(user);
});
```

함수의 파라미터에 {(Key)} 넣음으로 자동으로 객체를 분해한다.

#### for..of 사용한다면 ?

```js
const users = [
  { name: 'kim', age: 10, addr: 'kor' },
  { name: 'joe', age: 20, addr: 'usa' },
  { name: 'miko', age: 30, addr: 'jp' },
];

for (var { name: n, age: a } of users) {
  console.log(n);
  console.log(a);
}
```

🕵️‍♂️ 배열 내 객체들은 for of 문을 사용하여 비구조화 할 수 있다

#### Object.entries

```js
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries)); // pete
```

### 4. 중첩 객체

```js
const kim = {
  name: 'kim',
  age: 10,
  addr: 'kor',
  friends: [
    { name: 'joe', age: 20, addr: 'usa' },
    { name: 'miko', age: 30, addr: 'jp' },
  ],
};

let {
  name: userName,
  friends: [{ name: jpFriend }],
} = kim;
console.log(userName); // kim
console.log(jpFriend); // miko
```

객체를 한 번 비구조화로 만든 후 `friends` 배열 안을 다시 한 번 비구조화한다.  
또 다른 예시

```js
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};
// 🔽 options를 비구조화
let {
  size: { width, height },
  items: [item1, item2],
  title = 'Menu', // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
```
