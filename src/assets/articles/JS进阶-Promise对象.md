# Promise对象

不知道各位同学听说过“回调地狱”没有，ES6的promise就能帮助我们很好的解决“回调地狱”的问题。

ES5的代码中，一旦出现了多层嵌套回调，写完的代码层次过多，非常难以进行维护和二次开发！

promise，顾名思义，这是一种承诺——当他成功的执行了一些代码会如何，当他失败之后，又会如何。非常符合人类的思路，不冰冷，不机械。



**promise的基本用法**

promise执行多步操作非常非常好用，那么我们来模拟一下。

假设我们要吃饭，那么就有三个步骤：

1. 洗菜切菜做饭；
2. 盛菜端饭坐下吃饭；
3. 收拾桌子洗碗。

试想一下，如果你没有做饭，可以直接跳跃到第二步吃饭吗？

可以喝西北风。

这个过程是有顺序的，必须上一部执行完成，才能顺利进行下一步。



**ES6的写法**

```javascript
let state = 1

// 第一步
function step1(resolve, reject) {
  console.log("洗菜！切菜！做饭！")
  if(state == 1) {
    resolve("洗菜切菜做饭complete！")
  } else {
    reject("洗菜切菜做饭Failed……")
  }
}

// 第二步
function step2(resolve, reject) {
  console.log("吃饭啦！")
  if(state == 1) {
    resolve("吃饭成功！")
  } else {
    reject("吃饭失败……")
  }
}

// 第三步
function step3(resolve, reject) {
  console.log("吃完了洗碗！")
  if(state == 1){
    resolve("洗完啦！")
  } else {
    reject("洗碗失败……")
  }
}

new Promise(step1).then(function(val) {
  console.log("val", val)
  return new Promise(step2)
}).then(function(val) {
  console.log(val)
  return new Promise(step3)
}).then(function(val) {
  console.log(val)
  return val
})
```

观察一下结构，`new`一个`promise`对象，这里传入了一个函数，函数里有成功了（`resolve`）干什么；失败了（`reject`）干什么。

接下来有个`.then`，这里又传入了一个函数，函数里传入一个参数，这个参数，就是前面resolve和reject说的话。

（完）