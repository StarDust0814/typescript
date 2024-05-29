// 导出
export default 1;
// 其他导出
export let x = 2;
export const add = (a:any, b:any)=>{
    return a+b;
}
export let arr = [1,2,3]

let test1 = 2
const sub = (a:any, b:any)=>{
    return a - b;
}
let arr2 = [4,5,6]
export{
    test1,
    sub,
    arr2
}