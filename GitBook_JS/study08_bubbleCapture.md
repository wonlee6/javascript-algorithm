# 버블링 & 캡처링

### 1. 버블링

> 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작합니다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작.

```js
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

![bubble](./bubble.png)

- `form` 클릭 시 Form에 할당된 `alert`만 실행
- `div` 클릭 시 form, div alert 실행
- `p` 클릭 시 form, div, p 실행

💌 즉, 상위 요소에서 이벤트 핸들러가 존재 할 시, 하위 요소에서도 적용된다.
이런 흐름을 '**이벤트 버블링**' 이라고 한다.

🕵️‍♂️ 거의 대부분의 이벤트는 버블링 된다.

### 2. 버블링 중단하기

> `event.stopPropagation()` 사용하면 된다.

```js
<body onclick='alert(`버블링은 여기까지 도달하지 못합니다.`)'>
  <button onclick='event.stopPropagation()'>클릭해 주세요.</button>
</body>
```

❗ 버블링은 유용하기에 꼭 멈춰야 하는 상황일 때만 멈추는 것이 좋다.

### 3. event

> 이벤트의 가장 안쪽에서 발생한 이벤트를 `target`요소라 칭하며, `event.target` 사용하여 접근할 수 있다.

```js
form.onclick = function (event) {
  event.target.style.backgroundColor = 'yellow';

  setTimeout(() => {
    alert('target = ' + event.target.tagName + ', this=' + this.tagName);
    event.target.style.backgroundColor = '';
  }, 0);
};
```

화면

![event](./event.png)

- `form` 클릭 시 -> target : form, this : form
- `div` 클릭 시 -> target : div, this : form
- `p` 클릭 시 -> target : p, this : form

❗ `event.target` 과 `this`(event.currentTarget)는 차이점이 존재한다.

- `event.target`은 실제 진행된 요소, 버블링이 진행되어도 변하지 않는다.
- `this`는 현재 실행중인 핸들러가 할당한 요소를 참조한다.

### 4. 캡처링 (capturing)

표준 DOM Event에서 정의한 3단계

1. 캡처링 - 이벤트가 하위 요소로 전파되는 단계
2. 타깃 - 이벤트가 실제 타깃 요소로 전달되는 단계
3. 버블링 - 이벤트가 상위 요소로 전파되는 단계

![capturing](./capturing.png)

`<td>`를 클릭하면 이벤트가 최상위 조상에서 시작해 아래로 전파되고(캡처링 단계), 이벤트가 타깃 요소에 도착해 실행된 후(타깃 단계), 다시 위로 전파됩니다(버블링 단계). 이런 과정을 통해 요소에 할당된 이벤트 핸들러가 호출 됨

🕵️‍♂️ 캡처링은 현재 자주 사용하고 있지 않다.

### 정리

- 버블링 : 한 요소의 이벤트 핸들러가 발생하고, 최상단의 요소의 핸들러까지 차례대로 발생하는 현상
- 캡처링 : 이벤트가 최상위 조상에서 시작해 아래로(event.target) 전파되는 단계
- evnet
  - event.target : 실제 이벤트가 시작된 '타겟'요소
  - this(event.currentTarget)는 '현재'요소로 현재 실행 중인 핸들러가 할당된 요소를 참조

다음 챕터 [이벤트 위임](https://github.com/wooritech/wooricamp-2th/blob/main/js/sangwon/study09_eventDelegation.md)🎵
