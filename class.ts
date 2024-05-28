class ClassStudy{
    // 构造函数的参数必须要先声明才能使用，而且要赋一个初始值
    name:string
    age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    talk(){}
}

// TS的接口是可以附带属性的
interface PersonClass1{
    get(type:boolean):boolean
}

interface PersonClass2{
    set():void
    sex:string
}

class PersonImplement extends ClassStudy implements PersonClass1,PersonClass2{
    // 实现的接口类，属性也需要提前声明再传入
    sex:string
    constructor(name:string, age:number, sex:string){
        super(name, age)
        this.sex = sex
    }
    get(type:boolean):boolean{
        return type
    }
    set(){}

}

// 使用案例
interface Options {
    el: string | HTMLElement
}

interface VueCls{
    init():void
    options:Options
}

interface Vnode{
    tag:string
    text?:string
    props?:{
        id?:number|string
        key?:number|string|object
    }
    children?:Vnode[]
}

class Dom{
    constructor(){}
    private createElement(el:string):HTMLElement{
        return document.createElement(el);
    }
    protected setText(el:Element, text:string | null){
        el.textContent = text;
    }
    protected render(createElement:Vnode):HTMLElement{
        const el = this.createElement(createElement.tag)
        if(createElement.children && Array.isArray(createElement.children)){
            createElement.children.forEach(item =>{
                const child = this.render(item)
                this.setText(child,item.text??null)
                el.appendChild(child)
            })
        }else{
            this.setText(el,createElement.text??null)
        }
        return el;
    }
}

class Vue extends Dom implements VueCls{
    options:Options
    constructor(options:Options){
        super()
        this.options = options
        this.init()
    }
    static version(){
        return '1.0.0'
    }

    public init(){
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        let data:Vnode = {
            tag:"div",
            props:{
                id:1,
                key:1
            },children:[{
                tag:'div',
                text:"子集1"},{
                    tag:"div",
                    text:"子集2"
                }
            ]
        }
        app?.appendChild(this.render(data))
        console.log(app)

        this.mount(app as Element)
    }

    public mount(app:Element){
        document.body.appendChild(app)
    }
}


const v = new Vue({
    el:"#app"
})



