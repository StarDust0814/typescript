// mixins可以将多个类合并成一个类，同时还能正常调用原本类的方法。有点类似类的引入
// 实现的效果就是将不同类中相似的逻辑抽离出来
class Logger{
    log(msg:string){
        console.log(msg);
    }
}

class Html{
    render(){
        console.log("render")
    }
}

class App{
    run(){
        console.log("run")
    }
}
type Custructor<T>  = new (...args:any[]) => T

// 定义插件类集成到APP类中的方法
function pluginMinxins<T extends Custructor<App>>(Base:T){
    return class extends Base{
        // 引入其他类
        private Logger = new Logger()
        private Html = new Html()
        constructor(...args:any[]){
            super(...args);
            this.Logger = new Logger()
            this.Html = new Html()
        }
        // 在这个集成后的新类中的各个方法就可以调用原本各个类的方法或者做改进
        run(){
            this.Logger.log('run')
        }
        render() {
            this.Logger.log('render')
            this.Html.render()
        }
    }
}

const mixins = pluginMinxins(App)
const app = new mixins()

app.run()
app.render()