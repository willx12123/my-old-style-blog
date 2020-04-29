# 星际穿越

星际穿越，是模仿漫天星辰扑面而来的感觉。

最关键的在于对透视的掌握。

## 00 思路构想

1. 星星是一个圆，会随机的出现在屏幕的任何位置；
2. 星星的远近：圆的大小来表示远近；
3. 星星的运动轨迹：连接星星与中心点的射线，向外运动。

## 01 创建星星

我们可以使用一个Star类，来用它表示我们的星星。

```java
class Star { }
```

星星的成员变量有哪些？星星的位置和星星运动的速度。

```java
class Star {
  // 屏幕中的坐标
  private float x;
  private float y;
  // 离我们的远近
  private float z;
  private float speed;
  
  Star() {
    x = random(0, width);
    y = random(0, height);
    z = random(0, width); 
    // 也可以是height，这里只是模拟开头，星星可能处于任何一个位置
  }
}
```

我们还需要什么？

星星会不断的移动，所以说我们需要绘制它移动的轨迹.

这里要注意一个点，如果说使用了某一个对象的方法去创建一个图形，那么当重新调用这个方法的时候，这个图形就会被更新，而不是重复绘制。

```java
public void show() {
  fill(255); // 上色
  ellipse(x, y, 10, 10);
}
```

这个方法，就可以对象控制画出一个圆。

所以在setup方法和draw方法中，应该这么写：

```java
Star[] stars = new Star[5];

void setup() {
  size(700, 700);
  for (int i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

void draw() {
  background(0);
  for (int i = 0; i < stars.length; i++) {
    stars[i].show();
  }
}
```

这就生成五个静态的星星。



## 02 移动星星

移动星星，意味着改变位置，连续的改变位置就会变成移动。因为我们前面说到过，使用一个对象的方法创建的圆，再调用该对象的该方法时，便会重新创建，原来的圆就会消失。

这一步看起来很复杂，但其实非常简单。

我们在更新函数里面，只需要做两件事情：

1. 减少z，因为z是星星离我们的距离；
2. 如果星星跑到了我们背后，他们就该重置位置在离我们最远处了。

```java
void update() {
   z = z - seed;
   if(z <= 1) {
     z = width;
     x = random(0, width);
     y = random(0, height);
   }
}
```

**我们不需要关心x和y的值**，我们接下来就会通过某种计算，将z的变化，表现在x，y上。

*这里需要提到一点，我们在这里利用了透视的原理，实际上，x与y的值是不会改变的，只是我们的透视视角，让他们看起来，是一条斜线。*

更新完了位置，我们需要在show方法中，通过计算表示出新的x、y了。

```java
public void show() {
  fill(255); // 上色
  float sx = map(x / z, 0, 1, 0, width);
  float sy = map(y / z, 0, 1, 0, height);
  float r = map(z, 0, width, 15, 0);
  ellipse(sx, sy, r, r);
}
```

紧接着我们只需要在主方法里，不断的循环`update()`和`show()`即可！



## 03 大功告成

```java
void draw() {
  background(0);
  translate(width / 2, height / 2);
  for(int i = 0; i < stars.length; i++) {
    stars[i].update(speed);
    stars[i].show();
}
```



## 04 附录：完整代码

```java
Star[] stars = new Star[600];
float speed = 15;

void setup() {
 size(800, 800); 
 for (int i = 0; i < stars.length; i++) {
   stars[i] = new Star();
 }
}

void draw() {
  background(0);
  translate(width / 2, height / 2);
  for(int i = 0; i < stars.length; i++) {
    stars[i].update(speed);
    stars[i].show();
  }
}
```

```java
class Star {
  float x, y, z;
  float pz;
  
  Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }
  
  void update(float speed) {
    z = z - speed;
    if(z < 1) {
      z = width;
      x = random(-width, width);
      y = random(-height, height);
      pz = z;
    }
  }
  
  void show() {
    fill(255);
    noStroke();
    
    float sx = map(x / z, 0, 1, 0, width);
    float sy = map(y / z, 0, 1, 0, height);

    float r = map(z, 0, width, 15, 0);
    
    ellipse(sx, sy, r, r);
    
    stroke(255);
    line(sx, sy, x, y);
  }
}
```

这里我加上了射线，其实非常简单，就是在星星的新位置和起始点画一条线。

（完）