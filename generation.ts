function Add<T>(a:T, b:T):Array<T>{
    return [a,b]
}

Add<number>(1,2)
Add<string>('1','2')
// 泛型函数同样支持不同的类型同时传入
function Sub<T,U>(a:T,b:U):Array<T|U>{
    const param:Array<T|U> = [a,b]
    return param
}

Sub<Boolean,number>(false,2)

//泛型接口，可以用于约束泛型的上界
interface Len{
    length:number
}

function getLength<T extends Len>(arg:T){
    return arg.length
}

console.log(getLength<string>("frank"))