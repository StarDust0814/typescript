interface User{
    name:string
    age:number
}

function add(user:User) :User{
    return user
}

console.log(add({name:"frank",age:25}))