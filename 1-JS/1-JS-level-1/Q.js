//---------------------------------------
let x = 100;
function f1() {
    function f2() {
        function f3() {
            console.log(xx);
        }
        f3()
    }
    f2();
}
f1();

//---------------------------------------

let o1 = { x: 1 }
let o2 = { y: 2 }
let o3 = { z: 3 };

Object.setPrototypeOf(o3, o2)
Object.setPrototypeOf(o2, o1)

console.log(o3.x);
console.log(o3.xx);