let str :string = 'test'
let num:number = 22
console.log(str)
console.log(num)

let v:void = null

// ES6的模板字符串形式 `${}`
str = `dddd${num}`
console.log(str)

// 数字支持八进制、十六进制、二进制 NaN Infinity
let n1 :number = NaN
let n2 :number = Infinity
let n3 :number = 0b001
let n4 :number = 0xf002
let n5 :number = 0o003

// 但是Boolean和boolean有区别，前者是一个对象，它的构造函数是传递一个01，返回一个Boolean对象而不是true或false
// 这样报错
// let cBoolean :boolean = new Boolean(1)


let cBoolean: Boolean = new Boolean(1)
let bool :boolean = true

// 空值void表示没有任何返回值的函数，所以它常用于函数中，比如异步回调函数
function test():void{
    console.log('test')
}
// void也支持赋值成undefined和null（但是后者必须要在 tsconfig.json中将strict严格模式关闭）
let u:void = undefined
u = null

