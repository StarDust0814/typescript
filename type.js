// 联合类型，可以通过在定义类型时，使用|进行区分，代表这个变量可以是number或者是string
let val1 = '086-13876904583';
console.log(val1);
// 函数也可以使用联合类型
const fn = (sth) => {
    return !!sth;
};
console.log(fn(false));
const info = (man) => {
    console.log(man.name, man.age, man.gender);
};
info({ name: "frank", age: 25, gender: "男" });
