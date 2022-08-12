// export {}

// class App{
//     test(){
//         console.log("Test function working")
//     }
// }
// let a= new App();
// a.test()
// let a:number=10.10;
// console.warn(a)
// let data=['amin','bacha','sajid',10,true]
// data.push("Mansoor")
// data[3]=true
// console.log(data)


// interface usersTyped{
//     name:string,
//     age:number,
//     address:any
// }

// let usersTyped={
//     name:'bruce',
//     age:30,
//     address:"street 20,25 and others"
// }
// usersTyped.name='peter'
// console.warn(usersTyped)

// //----------Union types----------
// let data: string | number | boolean = 'Amin'
// data = 0;
// data = true

// console.warn(data)
// ///.........Interface................

// interface userType {
//     name: string,
//     age: number
//     getName: () => string
// }
// let users: userType = {
//     name: 'Aminullah',
//     age: 30,
//     getName: function () {
//         return "Amin"
//     }
// }
// console.log(users.getName())
// //---------- Function---------------

// function cals(a: number, b?: number): number {
//     return b ? a + b : a
//     // "hello"


// }
// console.log(cals(10 + 10, 50))

// class App {
//     name: string = "Aminullah";
//     constructor(name: string) {
//         this.name = name
//     }
//     getName(): string {
//         // console.warn(this.name)
//         return this.name
//     }
// }
// let a1 = new App("Amin");
// console.log(a1.getName())

//------------ inheritance-------------
class Parent {
    name;
    setName(name) {
        this.name = name
    }
}

class child extends Parent {

    getName() {
        return this.name
    }
}
let c1 = new child();
c1.setName("Bacha")
console.log(c1.getName())