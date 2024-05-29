let symbolA1 : symbol = Symbol(1)
let symbolA2 : symbol = Symbol(1)

// symbol有点类似JAVA中的字符串在JVM中的存储方式，即字符串常量池
// 使用Symbol.for，如果之前已经创建过这个对象，后续还要创建则会直接使用存放在“字符串常量池”中的对象作为引用指向的对象
// 但是使用Symbol()创建，它们内容相同但是是不同的对象
console.log(Symbol.for("frank") == Symbol.for("frank"))
console.log(symbolA1 === symbolA2)

// symbol一般作为键值对中的key
let symbolObj = {
    name:"frank",
    [symbolA1]: 25,
    [symbolA2]: 18
}

// 使用for Object.keys等方法都不能拿到以symbol类型作为key的键值对
for(let key in symbolObj){
    console.log(key)
}

// 只能拿到symbol类型的
console.log(Object.getOwnPropertySymbols(symbolObj))

// 反射可以拿到所有的
console.log(Reflect.ownKeys(symbolObj))

// symbol中的迭代器
var symbolArr = [1,2,3,4,5]
let iterator = symbolArr[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) 
console.log(iterator.next())
console.log(iterator.next())
// 最后一层会返回value undefined done true
console.log(iterator.next())