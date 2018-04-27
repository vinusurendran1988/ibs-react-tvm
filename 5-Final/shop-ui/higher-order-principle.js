

function f1() {
    // console.log('log before');
    console.log('im f1');
    // console.log('log after');
}
function f2() {
    // console.log('log before');
    console.log('im f2');
    // console.log('log after');
}

function logWrapper(f) {
    let newF = function () {
        console.log('log before');
        f();
        console.log('log after');
    }
    return newF;
}

let logBasedF1 = logWrapper(f1);
let logBasedF2 = logWrapper(f2);

logBasedF1();