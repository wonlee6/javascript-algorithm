# Walking the DOM

### 1. DOM 탐색하기

![dom](./DOM.png)

> DOM 트리의 상단 요소에 접근하는 방법

- `<html> = document.documentElement`
- `<body> = document.body`
- `<head> = document.head`

### 2. 자식 노드 탐색하기

- **자식 노드(child node, children)** 는 바로 하위 요소를 뜻함
- **후손 노드(descendants)** 는 중첩 관계에 있는 모든 요소를 뜻함

```js
<div class='parent'>
  <div class='child'>
    <div class='child2'>
      <h1>부모와 자식</h1>
      <h2 class='bro'>형제 요소</h2>
      <div class='el'></div>
    </div>
  </div>
</div>;

let child2 = document.querySelector('.child2'); // child2 요소 선택
let bro = document.querySelector('.bro');

console.log(child2.hasChildNodes()); // 자식 노드가 있는지? true
console.log(child2.firstElementChild); // <h1>부모와 자식 </h1>
console.log(child2.lastElementChild); // <div class="el"></div>
// console.log(child2.childNodes);
console.log(child2.children); // [h1, h2, div.el]
console.log(child2.parentNode); // <div class="child"></div>
console.log(child2.parentElement); // ""
console.log(bro.previousElementSibling); // 이전 형제 요소 h1
console.log(bro.nextElementSibling); // 다음 형제 요소 div.el
```
