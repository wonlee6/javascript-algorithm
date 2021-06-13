# 브라우저 기본 동작(Browser default actions)

> 브라우저는 특정 동작을 자동으로 수행한다.

예시)

1.  링크를 클릭하면 해당 URL로 이동
2.  폼 전송 버튼을 누르면 서버에 전송
3.  글자를 드래그 할 때

#### 브라우저 기본 동작 막기

- event 객체의 `event.preventDefault()` 메서드 사용
- 핸들러가 `addEventListener가` 아닌 `on<event>`를 사용해 할당되었다면 false를 반환하게 해 기본 동작을 막기

```html
<a href="/" onclick="return false">이곳</a>
<a href="/" onclick="event.preventDefault()">이곳을</a> 클릭해주세요.
```

`on<event>`를 사용한다면?

```html
<ul id="menu" class="menu">
  <li><a href="/html">HTML</a></li>
  <li><a href="/javascript">JavaScript</a></li>
  <li><a href="/css">CSS</a></li>
</ul>
```

```js
menu.onclick = function (event) {
  if (event.target.nodeName != 'A') return;

  let href = event.target.getAttribute('href');
  alert(href); // 서버에서 데이터를 읽어오거나, UI를 새로 만든다거나 하는 등의 작업이 여기에 들어갑니다.

  return false; // 브라우저 동작을 취소합니다(URL로 넘어가지 않음).
};
```

#### 정리

javascript 통해 브라우저의 기본 동작을 막을 수 있다.

- `event.preventDefault()`, `return false`
