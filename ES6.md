---
title: ES6简介
categories: Little.Luo
tags: JS
date: "2018-08-04"
---

1.ECMAScript简介

一.ECMAScript简介.

1.Netscape公司创造了JavaScript之后，将JavaScript提交给国际组织ECMA，希望ECMA制定JavaScript语言标准，ECMAScript由此诞生。

2.JavaScript包括：ECMAScript、DOM和BOM。

3.ECMAScript自从发布开始，经历了很多版本，但由于每个版本的小版本过多，从6.0开始，ECMA国际组织决定，以后每年的6月份发布一次，作为当年的正式版本，ES6由此诞生。

4.ES6，即ECMAScript 6，它是一个泛称，也是一个历史名词，在2015年发布了第一版，ES2015，在2016发布了第二个版本，ES2016，在2017发布了第三个版本，ES2017。

5.所以，ES6只是一个泛称，ES2015，ES2016，ES2017是每年发布的ES版本。

6.现在，网上通常把ES2015简称ES6，ES2016简称ES7，ES2017简称ES8，ES2018简称ES9。

二.let和const和块级作用域.

1.let区别于var的地方：

(1)不存在变量提升：

```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

（2）暂时性死区：

```

```

（3）不能重复声明：`let`不允许在相同作用域内，重复声明同一个变量。

2.块级作用域。

ES5只有全局作用域和函数作用域，ES6引入了块级作用域。

为什么需要块级作用域？

```
// var定义的循环变量泄露到了全局。
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();
```

```
// ES6之前的解决办法：
var a = [];
for (var i = 0; i < 10; i++) {
  function (i) { 
	a[i] = function () {
    	console.log(i);
  	};
  }(i);	
}
a[6]();
```

```
// ES6的解决办法：
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();
```

3.const除了声明的是常量外，其它大体同let，此处略。

4.变量声明方法：

（1）ES5只有var和function。

（2）ES6新增let、const、import和class。

二.变量的解构赋值.

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构 。

一般赋值

```
let x = 10
let y = 9
```

（1）数组的结构赋值

```
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```

（2）对象的结构赋值

```
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```

（3）字符串的解构赋值

```
const [a, b, c, d, e] = 'hello'
```

（4）数值、布尔值和函数参数的结构赋值

三.字符串的扩展.

