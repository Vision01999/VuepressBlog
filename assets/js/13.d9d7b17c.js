(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{506:function(t,n,o){"use strict";o.r(n);var r=o(6),s=Object(r.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"原型链"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("_ _ proto _ _ 和 constructor 属性是对象所独有的")])]),t._v(" "),o("li",[o("strong",[t._v("prototype 属性是函数独有的")])])]),t._v(" "),o("blockquote",[o("img",{staticStyle:{"backgrou-size":"45%"},attrs:{src:t.$withBase("/img/JS/原型链.png"),alt:"foo"}})]),t._v(" "),o("h3",{attrs:{id:"proto-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proto-属性"}},[t._v("#")]),t._v(" _ proto_ _属性")]),t._v(" "),o("p",[o("strong",[t._v("_ _ proto _ _属性是对象独有的")]),t._v("，_ _ proto _ _都是由一个"),o("strong",[t._v("一个对象指向另一个对象")]),t._v("，即指向它们的原型对象")]),t._v(" "),o("p",[o("strong",[t._v("作用")]),t._v("：就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的_ _ proto _ _属性所指向的父对象中找，一直往上面找，直到原型链顶端"),o("strong",[t._v("null")]),t._v("。仍未找到返回undefined")]),t._v(" "),o("h2",{attrs:{id:"prototype"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" Prototype")]),t._v(" "),o("p",[o("strong",[t._v("protype")]),t._v("是函数独有的，它是"),o("strong",[t._v("从一个函数指向一个对象")]),t._v("。")]),t._v(" "),o("p",[t._v("它的"),o("strong",[t._v("含义是函数的原型对象")]),t._v("，也就是这个函数所创建的实例的原型对象")]),t._v(" "),o("p",[t._v("对象变量 obj的proto的原型对象 = = = 该对象的构造函数FConstructor的原型对象protype")]),t._v(" "),o("p",[o("strong",[t._v("prototy属性的作用：")])]),t._v(" "),o("p",[t._v("它的作用就是让该函数实例化的对象们都可以找到公用的属性和方法。")]),t._v(" "),o("h2",{attrs:{id:"constructor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),o("p",[o("strong",[t._v("constructor")]),t._v("属性也是对象才拥有的，他们"),o("strong",[t._v("从一个对象指向一个函数")]),t._v("，含义就是"),o("strong",[t._v("指向该对象的构造函数")]),t._v("，每个对象都有构造函数")]),t._v(" "),o("p",[t._v("Function 这个对像比较特殊，它的构造函数就是它自己，因为function可以看成一个函数或者对象，所有函数最终都是由Function（）构造函数得来，所以constructor属性的终点就是Function（）。")]),t._v(" "),o("h3",{attrs:{id:"动态原型模式创建对象"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#动态原型模式创建对象"}},[t._v("#")]),t._v(" 动态原型模式创建对象")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('动态原型模式创建对象\n//构造方法内部封装属性\nfunction Person(name, age) {\n  //每个对象都添加自己的属性\n  this.name = name;\n  this.age = age;\n  /*\n      判断this.eat这个属性是不是function，如果不是function则证明是第一次创建对象，\n      则把这个funcion添加到原型中。\n      如果是function，则代表原型中已经有了这个方法，则不需要再添加。\n      perfect！完美解决了性能和代码的封装问题。\n  */\n  if(typeof this.eat !== "function"){\n      Person.prototype.eat = function () {\n          alert(this.name + " 在吃");\n      }\n  }\n}\nvar p1 = new Person("志玲", 40);\np1.eat(); //志玲 在吃\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);