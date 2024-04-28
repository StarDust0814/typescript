// 一般声明成一种类型的数组只支持该类型的元素放入，any除外
let arr:number[] = [1,2,3,4,5]

// 也可以用泛型的方式声明
let arrG:Array<number> = [1,2,3,4,5]

// 也可以用接口表示数组，一般用于描述类数组
// 表示如果数组的索引是数字的话，value的类型必须是数字
interface NumberArrayInterface{
    [index:number]:number;
}

let narr:number[][] = [[1,2],[3,4]]

// 例如 arguments数字就是一个类数组，读取方式如下
function Arr(...args:any):void{
    console.log(args)
    let arr:IArguments = arguments
    console.log(arr)
}
Arr(1,2,3)
