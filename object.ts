// TS中，能使用 object类型的，只能是 数组、对象、函数，它们都是引用类型
// 注意，TS中的字符和字符串是基本类型，和JAVA的String不一样
let obj :object = []
let obj2:object = {}
let obj3:object = ()=>123

// {}这种类型相当于 new Object，注意这个Object和上面的 object不是一个东西
// 这里的更类似JAVA中的Object顶层类，可以被指定成任意一种类型，而上面的明确了是引用形式的变量才能声明成object
let objAll :{} = '123'