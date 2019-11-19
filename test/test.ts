/**
 * @description: 数据类型
 * https://juejin.im/post/5c04d3f3f265da612e28649c
 */
let isFLag:boolean = true;

let age:number = 21;

let firstName:string = 'hanck';

let pets:string[] = ['dog', 'cat'];

let pets2:Array<string> = ['dog', 'cat'];

let arr:Array<string|number|boolean> = ['hello', 21];

let arrAny:Array<any> = [true,19]; 

let tuple:[string, number] = ['aa', 21];

enum orderStatus {
    WAIT_FOR_PAY = "待支付",
    UNDELIVERED = "完成支付，待发货",
    DELIVERED = "已发货",
    COMPLETED = "已确认收货"
}


// let btn = document.getElementById('btn'); //
// btn.style.color = 'blue'; 

// let btn:any = document.getElementById('btn');
// btn.style.color = 'blue'; 

let btn = document.getElementById('btn');
btn!.style!.color = 'blue'; 


function say(name:string):void { // void 针对return， return undefined
    console.log('hello', name);
}

say('a');


function say2(name:string):string {
    console.log(name);
    return name;
}


let xx:never;
function error(message: string): never {
    throw new Error(message);
}

error('error');


/**
 * any是任意的值
 * void不能有任何值
 * never不会有返回值
 */


function sayNever(str: string):(never | string) {
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

function func1(name:string, age:number):void {
    console.log('hello', name, age);
}

func1('a',12);

function func2(name:string, age?:number):void {
    console.log('hello');
}

func2('a');

function ajax(url:string, method:string='get'):void {
    console.log(url,method);
}

function sum(...args:Array<number>):number {
    return eval(args.join('+'));
}

let total:number = sum(1,2,3,4,5);
console.log(total);


function overload(val: string): void;

function overload(val: number): void;

function overload(val: any): void {
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

class Person{
    // 这里声明的变量，是实例上的属性
    name:string
    age:number
    constructor(name:string,age:number){
      // this.name和this.age必须在前面先声明好类型
      // name:string   age:number
      this.name = name
      this.age = age
    }
    // 原型方法
    say():string{
      return "hello hanck"
    }
  }
  
let p = new Person("aaa",28);

class Parent{
    // 这里声明的变量，是实例上的属性
    name:string
    age:number
    constructor(name:string,age:number){
      // this.name和this.age必须在前面先声明好类型
      // name:string   age:number
      this.name = name
      this.age = age
    }
    // 原型方法
    say():string{
      return "hello hanck"
    }
}

class Child extends Parent {
    childName:string
    constructor(name:string, age:number, childName:string) {
        super(name, age);
        this.childName = childName;
    }
}

let child = new Child('aa', 21, 'bb');


/**
 * @description: 类的修饰符
 * public公开的，可以供自己、子类以及其它类访问
 * protected受保护的，可以供自己、子类访问，但是其他就访问不了
 * private私有的，只有自己访问，而子类、其他都访问不了
 */

class DecParent{
    constructor(
        public name:string,
        protected age:number,
        private money:number
    ){
        this.name = name;
        this.age = age;
        this.money = money;
    }
        getName():string{
            return this.name
        }
        getAge():number{
            return this.age
        }
        getMoney():number{
            return this.money
        }

}

let pa = new DecParent("aa",28,10);

/**
 * @description: 静态属性、静态方法
 */

class StaticPerson {
    static staticName = 'haha';
    static say() {
        console.log('aaa');
    }
}

let pw = new StaticPerson()
StaticPerson.say() // aaa
// pw.say() // 报错


/**
 * @description: 抽象类
 * 抽取共性
 * 如果子类继承的是一个抽象类，子类必须实现父类里的抽象方法，否则不能实例化，报错
 */

abstract class Animal {
    abstract eat(): void;
}

class Cat extends Animal{
    eat() {
        console.log('eat fish');
    }
}

class Dog extends Animal{
    eat(){
        console.log("eat bones")
    }
}


/**
 * @description: 接口
 * 主要是一种规范，与抽象类类似，但不局限与类，还有属性、函数等
 * 函数getUserInfo和getInfo都遵循同一个规范
 * 可以通过规范复用
 */

// function getUserInfo(user:{name:string,age:number}):void{
//     console.log(`${user.name} ${user.age}`)
// }
// function getInfo(user:{name:string,age:number}):void{
//     console.log(`${user.name} ${user.age}`)
// }
// getUserInfo({name:"hanck",age:28})
// getInfo({name:"hanck",age:28})

interface infoInterface{
    name: string,
    age: number,
    city?: string
}

function getUserInfo(user: infoInterface) {
    console.log(`${user.name} ${user.age} ${user.city}`)
}

function getInfo(user: infoInterface) {
    console.log(`${user.name} ${user.age}`)
};

// 对一个函数的参数和返回值进行规范
interface mytotal {
    // 左侧是函数的参数，右侧是函数的返回类型
    (a:number,b:number) : number
}
  
let totala:mytotal = function (a:number,b:number):number {
    return a + b
}
  
console.log(totala(10,20))

// 对数组的规范
interface userArrInterface {
    // index为数组的索引，类型是number
    // 右边是数组里为字符串的数组成员
    [index: number]: number
}

let userArr: userArrInterface = [1,2];



// 对类的规范
interface Animalll {
    name: string,
    eat(any:string): void,
    [propName: string]: any
}

class Dogg implements Animalll {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    eat(any: string): void {
        console.log(`吃${any}`)
    }
}


interface Animalll1 {
    sleep(): void;
}

class Doggs implements Animalll, Animalll1 {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    eat(any: string): void {
        console.log(`吃${any}`)
    }
    sleep() {
        console.log('睡觉');
    }
}


function deal<T>(value: T): T{
    return value;
}

console.log(deal<string>('haha'));
console.log(deal<number>(1));


class MyMath<T>{
    private arr:T[] = [];
    add(value:T){
        this.arr.push(value);
    }
    max():T {
        return Math.max.apply(null, this.arr);
    }
}

// 这里规定了类型为number
// 相当于把T都替换成number
let myMath = new MyMath<number>()
myMath.add(1)
myMath.add(2)
myMath.add(3)
console.log(myMath.max())


/**
 * @description: 有了接口为什么还需要抽象类
 * 接口里面只能放定义，抽象类里面可以放普通类、普通类的方法、定义抽象的东西
 * 接口里面不可以放实现，而抽象类可以放实现
 */



interface kaola {
    age: number
}

class changeAge<kaola> {

}



