// 模块化导入
// 默认导出(default)的情况下，名称可以随便起
// 引入其他的导出内容，需要使用大括号解构
import xxx,{add,x,arr} from './module'
// 将默认导入和其他导入合并
import {sub,test1,arr2} from './module'
console.log(xxx)
console.log(add(2,2))
console.log(sub(0,2))
// 查看所有导入的内容
import * as api from './module'
console.log(api)