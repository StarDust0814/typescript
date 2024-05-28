// 联合类型，可以通过在定义类型时，使用|进行区分，代表这个变量可以是number或者是string
let val1 : number | string = '086-13876904583'
console.log(val1)


// 函数也可以使用联合类型
const fn = (sth:number|boolean):boolean =>{
    return !!sth
}

console.log(fn(false))

// 交叉类型，代表变量必须要实现&连接的所有属性，一般用于interface的对象创建。类似extends
interface People{
    name:string,
    age:number
}

interface Man{
    gender:string
}

const info = (man:People & Man)=>{
    console.log(man.name,man.age,man.gender)
}

info({name:"frank",age:25,gender:"男"})



