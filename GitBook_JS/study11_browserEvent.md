# 브라우저 이벤트 (Browser Event)

> Event란 ? 무언가 일어났다는 신호(사건). 모든 DOM 노드는 이러한 신호를 만들어냄, 참고로 이벤트는 DOM에만 한정하지 않음

### 자주사용하는 DOM 이벤트

- 마우스 이벤트
  - `click`
  - `contextmenu` - 오른쪽 클릭
  - `mouseover`, `mouseout` - 요소 위로 움직였을 떄, 요소 밖으로 나갔을 떄
  - `mousedown`, `mouseup` : 요소 위에서 마우스 왼쪽 버튼을 누르고 있을 때, 마우스 버튼을 뗄 때 발생
  - `mousemove` : 마우스를 움직일 때 발생
- Form 이벤트
  - `submit` : form 전송했을 때
  - `focus` : `<input>`과 같은 요소에 포커스 할 때
- 키보드 이벤트
  - `keydown`, `keyup` : 키보드를 누르거나 뗄 때
- css 이벤트

  - `transitionend` : CSS 애니매이션이 종료되었을 때

### 이벤트 핸들러 (event handler)

> 이벤트에 반응할려면 이벤트가 발생했을 때 실행되는 함수인 핸들러를 할당해야 한다.
> 핸들러란 ? 사용자의 행동에 어떻게 반응할지를 자바스크립 코드로 표현한 것

#### 예제

```html
<input value="클릭해 주세요." onclick="alert('클릭!')" type="button" />
```

`on<event>`에 click 이벤트를, `"alert('클릭!')"` = 핸들러

```js
<script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert(`토끼 ${i}마리`);
    }
  }
</script>
```

```html
<input type="button" onclick="countRabbits()" value="토끼를 세봅시다!" />
```

`onclick`에 함수를 호출하여 이벤트들 다룰수 있다.

### DOM 프로퍼티

DOM 프로퍼티 `on<event>`을 사용해서 핸들러를 할당할 수 있다.

```html
<input type="button" id="inin" value="clickplz" />

<script>
  inin.onclick = function () {
    alert('무야호');
  };
</script>
```

만약에 복수의 이벤트 핸들러를 할당한다면?

```html
<input type="button" id="inin" onclick="alert(`유야호`)" value="clickplz" />

<script>
  inin.onclick = function () {
    alert('무야호');
  };

  // inin.onclick = null;
</script>
```

onclick 프로퍼티는 단 하나밖에 없기 때문에, 복수의 이벤트 핸들러를 할당할 수 없다. 기존 핸들러는 덮어씌워지게 된다.

만약 핸들러를 제거하고 싶으면 `null`을 반환하면 된다.

### 자주하는 실수

```js
function some() {
  alert('무야호');
}

inin.onclick = some; // 정상
inin.onclick = some(); // 비정상 동작안함
```

`some()` 는 함수를 바로 호출 하겠다는 의미  
즉, DOM 프로퍼티에 이벤트 핸들러를 할당할 때 함수를 할당해야지, 함수의 호출값을 할당해서는 안된다.

```html
<input type="button" id="inin" onclick="some()" value="clickplz" />;

<script>
  function some() {
    alert('무야호');
  }

  inin.onclick = function () {
    some(); // 속성값
  };
</script>
```

브라우저는 속성값을 읽고, 속성값을 함수 본문으로 하는 핸들러 함수를 만들기 때문에 이런 차이가 발생

### addEventListener

> 여러 이벤트에 반응하려고 할 때 사용한다. 즉, 하나의 이벤트에 복수의 핸들러를 할당

> `element.addEventListener(event, handler, [options]);`

- `event` : 이벤트 이름
- `handler` : 함수
- `options` : 생략 가능 아래 세 가지의 프로퍼티를 가지고 있음
  - `once` : `true`이면 이벤트가 트리거 될 때 리스너가 자동으로 삭제된다.
  - `capture` : 어느 단계에서 이벤트를 다뤄야 하는지를 알려주는 프로퍼티
  - `passive` : `true`이면 리스너에서 지정한 함수가 `preventDefault()`를 호출하지 않는다.

### removeEventListener

`removeEventListener` 사용하면 `addEventListener` 지울 수 있다.

> `element.removeEventListener(event, handler, [options]);`

조심해야 하는 점이 변수가 없으면 핸들러가 삭제되지 않는다.

```js
inin.addEventListener('click', () => alert('hello'));
inin.removeEventListener('click', () => alert('hello'));
```

변수에 핸들러 함수를 저장해 놓지 않으면 핸들러를 지울 수 없다

```js
function some() {
  alert('hello');
}
inin.addEventListener('click', some);
inin.removeEventListener('click', some);
```

`addEventListener` 사용해서 복수의 핸들러를 할당한 예제

```html
<input type="button" id="inin" value="clickplz" />
<script>
  const sayHello1 = () => {
    alert('안녕하세요');
  };
  const sayHello2 = () => {
    alert('떙큐');
  };
  let button = document.querySelector('#inin');

  button.addEventListener('click', sayHello1);
  button.addEventListener('click', sayHello2);
</script>
```

### 이벤트 객체

현재 이벤트가 발생한 부분이 어떤 DOM 객체인지, 현재 발생한 이벤트가 어떤 이벤트인지 이벤트의 정보가 필요할 떄 사용할 수 있는 것이 이벤트 객체

예제

```html
<input id="myBtn2" type="button" value="클릭!" />
<script>
  myBtn2.onclick = (event) => {
    alert(
      event.type + ' 이벤트가 ' + event.currentTarget + '에서 발생했습니다.'
    );
  };
</script>
```

결과 값

`click` 이벤트가 `[object HTMLInputElement]` 에서 발생했습니다.

브라우저에서 이벤트가 발생하게되면 브라우저가 이벤트 객체를 생성
발생한 이벤트와 관련된 정보들을 이 객체에 담은 뒤, 이벤트 핸들러에 인수 형태로 전달하게끔 되어있다.

### 정리

- HTML 속성 : onclick="..."
- DOM 프로퍼티 : elem.onclick = function
- `addEventListener`로 (여러 개의)핸들러를 추가하고, `removeEventListener`로 삭제함
- 이벤트 객체 : 이벤트의 정보

다음 챕터 [버블링과 캡처링](https://github.com/wooritech/wooricamp-2th/blob/main/js/sangwon/study08_bubbleCapture.md)🎵
