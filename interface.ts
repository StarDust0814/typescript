
// 定义一个类型来确定一种对象应该具有的属性，类似JAVA中的class
// 注意对象必须要具有interface完整的属性，与属性保持一致
interface Person{
    name: string,
    age: number
}

const person:Person = {
    name:"frank",
    age:25
}

// 任意属性，注意，使用任意属性后，其他属性的类型都必须要是这个任意属性的类型子集
interface Object{
    [key:string]:any
}

// interface支持继承 
interface Person extends Object{}

const person1 : Person={
    name:"frank1",
    age:251,
    address:"wuhan"
}

// 限制属性为只读
// 属性可以指定成一个函数方法
// ? 可以指定该属性是可有可无的
interface Student extends Person{
    isGraduated? : boolean
    readonly score: number
    submit:()=>void
}

const student :Student={
    name:"frank2",
    age:252,
    score:99,
    submit(){
        console.log("submit")
    }
}

// 只读属性不允许修改 student.score = 100
student.submit()

