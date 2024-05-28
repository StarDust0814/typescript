interface A{
    run:string
}

interface B{
    build:string
}

// 类型断言写法，因为type可以是A或者B
let fn1 = (type: A | B):void=>{
    console.log((<A>type).run)
}
