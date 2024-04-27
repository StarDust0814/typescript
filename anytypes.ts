// 如果不想指定变量的类型，可以使用 any或者 unknown
let value :any = 123
value = "hello, ts"

// 但是unknown比any更安全，因为它不能赋值给其他类型，只能赋值给unknown和any
// 而且如果unknown指定了一个对象，是不能调用这个对象的方法，也不能读取它的属性的。但是any可以
let obj1 : unknown = {key1:'value1',key2:'value2'}
// 这样写会报错 obj1.key1

let obj2 :any={key1:'v1',k2:()=>number=>123}
console.log(obj2.key1)
obj2.k2()