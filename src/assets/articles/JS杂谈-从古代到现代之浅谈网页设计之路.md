# JS杂谈-从古代到现代之浅谈网页设计之路

## 一、 古代的网页开发

### 01 从零开始
比较原始的网页开发方法是分别创建.html/.css/.js，然后进行操作。<!--more-->类似于：

```javascript
let dom = document.getElementById('root');

let top = document.createElement('div');
top.innerHTML = '我是上面的文字';
dom.append(top);

let mid = document.createElement('p');
mid.innerHTML = '我是中间的文字';
dom.append(mid);

let bottom = document.createElement('div');
bottom.innerHTML = '我是下面的文字';
dom.append(bottom);
```

但实际上，这种方法非常的不便于维护，一旦代码比较长、业务逻辑比较多，就会非常痛苦，恨不得砸电脑。

### 02 面向对象

熟悉面向对象开发人应该就能想到，我们如果把每个位置的标签加文字，都当作对象，就好维护多了。

**top.js**
```javascript
function Top() {
    let top = document.createElement('div');
    top.innerHTML = '我是上面的文字';
    dom.append(top);
}
```

**mid.js**
```javascript
function Mid() {
    let mid = document.createElement('p');
    mid.innerHTML = '我是中间的文字';
    dom.append(mid);
}
```

**bottom.js**
```javascript
function Bottom() {
    let bottom = document.createElement('div');
    bottom.innerHTML = '我是下面的文字';
    dom.append(bottom);
}
```

**index.js**
```javascript
let dom = document.getElementById('root');

new Top();
new Mid();
new Bottom();
```

**index.html**
```html
<script src="./top.js"></script>
<script src="./mid.js"></script>
<script src="./bottom.js"></script>
<script src="./index.js"></script>
<!--注意顺序-->
```

但是这牺牲了一定的用户体验，因为本来一个js文件就可以渲染网页，现在需要三个js文件，也就多出了三个http请求，拖慢页面加载。 
而且一旦出现引用顺序错了，就会出问题，不易调试。

## 二、现代的模块化开发

### ES6的import与export

```javascript
import Top from './top.js';
import Mid from './mid.js';
import Bottom from './bottom.js';

let dom = document.getElementById('root');

new Top();
new Mid();
new Bottom();
```

如何使用呢？

```javascript
let a = "hello";
let b = 2;
let c = {
  a: [
    {
      a: 1
    }
  ]
}

export {
	a, b, c
}
```

```javascript
import {a, b, c} from "./xxx.js"
```

**必须服务器运行，不能直接双击文件。**

+ 使用`import * from "./xx.js"`导入所有export的变量。为了保证方便操作，会使用`import * as XXX from "./xx.js"`来命名。

+ 使用`export default a`，在import时，`import XXX form "./xx.js"`可以命名a为XXX。且一个文件只能export一个default。

（完）