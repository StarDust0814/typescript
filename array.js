// 一般声明成一种类型的数组只支持该类型的元素放入，any除外
let arr = [1, 2, 3, 4, 5];
// 也可以用泛型的方式声明
let arrG = [1, 2, 3, 4, 5];
let narr = [[1, 2], [3, 4]];
// 例如 arguments数字就是一个类数组，读取方式如下
function Arr(...args) {
    console.log(args);
    let arr = arguments;
    console.log(arr);
}
Arr(1, 2, 3);
