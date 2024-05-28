const person = {
    name: "frank",
    age: 25
};
const person1 = {
    name: "frank1",
    age: 251,
    address: "wuhan"
};
const student = {
    name: "frank2",
    age: 252,
    score: 99,
    submit() {
        console.log("submit");
    }
};
// 只读属性不允许修改 student.score = 100
student.submit();
