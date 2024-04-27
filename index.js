let str = 'test';
let num = 22;
console.log(str);
console.log(num);
let v = null;
// ES6的模板字符串形式 `${}`
str = `dddd${num}`;
console.log(str);
// 数字支持八进制、十六进制、二进制 NaN Infinity
let n1 = NaN;
let n2 = Infinity;
let n3 = 0b001;
let n4 = 0xf002;
let n5 = 0o003;
// 但是Boolean和boolean有区别，前者是一个对象，它的构造函数是传递一个01，返回一个Boolean对象而不是true或false
// 这样报错
// let cBoolean :boolean = new Boolean(1)
let cBoolean = new Boolean(1);
let bool = true;
// 空值void表示没有任何返回值的函数，所以它常用于函数中，比如异步回调函数
function test() {
    console.log('test');
}
// void也支持赋值成undefined和null（但是后者必须要在 tsconfig.json中将strict严格模式关闭）
let u = undefined;
u = null;
