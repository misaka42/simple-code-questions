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
