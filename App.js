// export {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getName = function () {
        return this.name;
    };
    return child;
}(Parent));
var c1 = new child();
c1.setName("Bacha");
console.log(c1.getName());
