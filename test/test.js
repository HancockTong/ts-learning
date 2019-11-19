"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @description: 数据类型
 * https://juejin.im/post/5c04d3f3f265da612e28649c
 */
var isFLag = true;
var age = 21;
var firstName = 'hanck';
var pets = ['dog', 'cat'];
var pets2 = ['dog', 'cat'];
var arr = ['hello', 21];
var arrAny = [true, 19];
var tuple = ['aa', 21];
var orderStatus;
(function (orderStatus) {
    orderStatus["WAIT_FOR_PAY"] = "\u5F85\u652F\u4ED8";
    orderStatus["UNDELIVERED"] = "\u5B8C\u6210\u652F\u4ED8\uFF0C\u5F85\u53D1\u8D27";
    orderStatus["DELIVERED"] = "\u5DF2\u53D1\u8D27";
    orderStatus["COMPLETED"] = "\u5DF2\u786E\u8BA4\u6536\u8D27";
})(orderStatus || (orderStatus = {}));
// let btn = document.getElementById('btn'); //
// btn.style.color = 'blue'; 
// let btn:any = document.getElementById('btn');
// btn.style.color = 'blue'; 
var btn = document.getElementById('btn');
btn.style.color = 'blue';
function say(name) {
    console.log('hello', name);
}
say('a');
function say2(name) {
    console.log(name);
    return name;
}
var xx;
function error(message) {
    throw new Error(message);
}
error('error');
/**
 * any是任意的值
 * void不能有任何值
 * never不会有返回值
 */
function sayNever(str) {
    return str;
}
sayNever('a');
/**
 * @description: 函数
 * 形参和实参一一对应
 * 可选参数，用？处理，放在后面
 * 可以赋默认参数
 * 可以实现函数重载
 */
function func1(name, age) {
    console.log('hello', name, age);
}
func1('a', 12);
function func2(name, age) {
    console.log('hello');
}
func2('a');
function ajax(url, method) {
    if (method === void 0) { method = 'get'; }
    console.log(url, method);
}
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return eval(args.join('+'));
}
var total = sum(1, 2, 3, 4, 5);
console.log(total);
function overload(val) {
    console.log(val);
}
/**
 * @description: 类
 * 定义
 * 继承
 * 修饰符
 * 静态属性、静态方法
 * 抽象类
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        // this.name和this.age必须在前面先声明好类型
        // name:string   age:number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    Person.prototype.say = function () {
        return "hello hanck";
    };
    return Person;
}());
var p = new Person("aaa", 28);
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        // this.name和this.age必须在前面先声明好类型
        // name:string   age:number
        this.name = name;
        this.age = age;
    }
    // 原型方法
    Parent.prototype.say = function () {
        return "hello hanck";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, childName) {
        var _this = _super.call(this, name, age) || this;
        _this.childName = childName;
        return _this;
    }
    return Child;
}(Parent));
var child = new Child('aa', 21, 'bb');
/**
 * @description: 类的修饰符
 * public公开的，可以供自己、子类以及其它类访问
 * protected受保护的，可以供自己、子类访问，但是其他就访问不了
 * private私有的，只有自己访问，而子类、其他都访问不了
 */
var DecParent = /** @class */ (function () {
    function DecParent(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
        this.name = name;
        this.age = age;
        this.money = money;
    }
    DecParent.prototype.getName = function () {
        return this.name;
    };
    DecParent.prototype.getAge = function () {
        return this.age;
    };
    DecParent.prototype.getMoney = function () {
        return this.money;
    };
    return DecParent;
}());
var pa = new DecParent("aa", 28, 10);
/**
 * @description: 静态属性、静态方法
 */
var StaticPerson = /** @class */ (function () {
    function StaticPerson() {
    }
    StaticPerson.say = function () {
        console.log('aaa');
    };
    StaticPerson.staticName = 'haha';
    return StaticPerson;
}());
var pw = new StaticPerson();
StaticPerson.say(); // aaa
// pw.say() // 报错
/**
 * @description: 抽象类
 * 抽取共性
 * 如果子类继承的是一个抽象类，子类必须实现父类里的抽象方法，否则不能实例化，报错
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log('eat fish');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log("eat bones");
    };
    return Dog;
}(Animal));
function getUserInfo(user) {
    console.log(user.name + " " + user.age + " " + user.city);
}
function getInfo(user) {
    console.log(user.name + " " + user.age);
}
;
var totala = function (a, b) {
    return a + b;
};
console.log(totala(10, 20));
var userArr = [1, 2];
var Dogg = /** @class */ (function () {
    function Dogg(name) {
        this.name = name;
    }
    Dogg.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    return Dogg;
}());
var Doggs = /** @class */ (function () {
    function Doggs(name) {
        this.name = name;
    }
    Doggs.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    Doggs.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Doggs;
}());
