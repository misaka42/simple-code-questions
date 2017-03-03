[![CircleCI](https://circleci.com/gh/ppq1991/simple-code-questions.svg?style=svg)](https://circleci.com/gh/ppq1991/simple-code-questions)

### 一些简单的前端代码面试题

每次现场面试工程师之前，总有各种各样的事情在忙，不一定有时间能提前根据简历准备相应的问题。

问答类的还好，现场根据简历和聊的情况，就可以针对性的想出一些考察方式。

不过代码类的就稍麻烦一些，现场开编辑器敲一个题干和对应的 *Test Case* 怎么也得 1 分钟，如果想要完备的 *Test Case* 时间还得更久，实在耽误双方的时间。

所以就把平时常用的一些题提前准备好，顺便写好 *Test Case* ，写代码环节直接把现在的代码部分删掉换成 ```// todo``` ，然后把编辑器交给面试人就可以找个沙发滑水 15 分钟了 : )

### 用法

```
npm i
npm test
```

### 目前的进度

* [isObjectEqual (deeply, but without circular references)](question-isObjectEqual.js)
* [flattenArray](question-flattenArray.js)
* [objectAssign](question-objectAssign.js)
* [deepClone](question-deepClone.js)

---

### 应用类

下面是一些非常基础的，DOM 应用类的前端考题，没有任何奇技淫巧，只是用来检测前端基本功是否合格。

##### 问题一(初级)

```html
<ul id="list" class="foo">
  <li>#0</li>
  <li><span>#1</span></li>
  <li>#2</li>
  <li>#3</li>
  <li><ul><li>#4</li></ul></li>
  ...
  <li><a href="//v2ex.com">#99998</a></li>
  <li>#99999</li>
  <li>#100000</li>
</ul>
```

* 为 `<ul>` 添加一个类 `bar`
* 删除第 10 个 `<li>`
* 在第 500 个 `<li>` 后面增加一个 `<li>` , 其文字内容为 `<v2ex.com />`
* 点击任意 `<li>` 弹窗显示其为当前列表中的第几项。

---

### 电话面试用

整理下平时电话面试用的问题

* 判断一个变量是否为数组。
* call、apply 的作用。
* ES6 的了解，箭头函数的作用。
* 固定宽高的 div 相对于 body 水平垂直居中。
* dom 基础操作，增删改查元素。
* 实现一个 insertAfter 的功能(或，插入在顶部、底部、某个元素前、某个元素后）。
* bind 的用法。
* 用正则表达式取出字符串(如AP_2017)中的数字/字母，并交换位置。
* 怎么实现事件代理。
* 如何按需加载一段脚本。
* 如何跨域调用接口。
* 对 http 缓存控制的了解，200(from cache) / 304 等。
* 国际单位转化，如将 100000 转化成 100k(还可以考 10,000,000 这种)。
* 打乱一个数组的内容(或，随机从数组不重复的取数)。
* 将某个容器内的所有 p 标签替换成 div 标签。
* 计算当前页面内最深的元素嵌套层级。
* 前端路由的简单实现。
* 你有用过哪些前端性能优化的方法。
* 你遇到过比较难的技术问题是，你是如何解决的。
* 最近在学什么。
