# 이벤트 위임(Event delegation)

> 이벤트 위임은 여러 요소를 다룰 때 사용하는데, 요소마다 핸들러를 할당하지 않고
> 공통 조상의 이벤트 핸들러를 통해 다룰 수 있다.
> 즉, 하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식’이라고 할 수 있다

#### 예제

![event2](./event2.png)

```js
<div id="container">
      <div class="pane">
        <h3>Horse</h3>
        <p>
          The horse is one of two extant subspecies of Equus ferus. It is an
          odd-toed ungulate mammal belonging to the taxonomic family Equidae.
          The horse has evolved over the past 45 to 55 million years from a
          small multi-toed creature, Eohippus, into the large, single-toed
          animal of today.
        </p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
      ...
<script>
container.onclick = function (event) {
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
};
</script>
```

- `event.target.className`이 `remove-button`이 아니면 리턴
- `event.target.closest(selector)`은 가장 인접한 조상을 찾음
- `let pane = event.target.closest('.pane');` => `.pane`이라는 조상클래스를 찾음

💌 앞서 설명했던 이벤트 버블링을 생각하고 코드를 보자

```html
<h1>오늘의 할 일</h1>
<ul class="itemList">
  <li>
    <input type="checkbox" id="item1" />
    <label for="item1">이벤트 버블링 학습</label>
  </li>
  <li>
    <input type="checkbox" id="item2" />
    <label for="item2">이벤트 캡쳐 학습</label>
  </li>
</ul>
```

```js
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
  input.addEventListener('click', function (event) {
    alert('clicked');
  });
});
```

위 코드는 input 태그를 만드는 코드이다. 여기서 인풋요소를 추가해야한다면?

```js
// ...

// 새 리스트 아이템을 추가하는 코드
var itemList = document.querySelector('.itemList');

var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode('이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);
```

❗ 추가된 인풋요소에는 alert이 동작하지 않는다. 이유는? 인풋 박스에 클릭 이벤트 리스너를 추가하는 시점에서 리스트 아이템은 두 개이기 때문

```js
// var inputs = document.querySelectorAll('input');
// inputs.forEach(function(input) {
// 	input.addEventListener('click', function() {
// 		alert('clicked');
// 	});
// });

var itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function (event) {
  alert('clicked');
});

// 새 리스트 아이템을 추가하는 코드
// ...
```

상위 요소에 `addEventListener` 통해 이벤트 버블링을 사용하면 하위 요소에서도 동작한다.

✍ 위의 코드에서 label 태그도 감지하고 있는데, input 요소에서만 click 이벤트를 발생시킬려면?

```js
var itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function (event) {
  let input = event.target.closest('input');
  if (!input) return;
  alert('clicked');
});
```

### 정리

- 이벤트 위임 :하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식
