// 实际上就是JAVA的注解，在不破坏原本类的基础上增强其功能

const Base:ClassDecorator = (target:any)=>{
    console.log(target)
    target.prototype.name = "frank"
    target.prototype.fn = ()=>{
        console.log("装饰器方法")
    }
}


class DecoratorHttp{
    
}

const http = new DecoratorHttp() as any

Base(DecoratorHttp)
console.log(http.name)