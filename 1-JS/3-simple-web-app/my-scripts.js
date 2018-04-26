
// #1

// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

//--------------------------------------------------------

// #2


// function foo(){}
// function bar(){foo()}
// function baz(){bar();}
// baz();

//--------------------------------------------------------

// #3


// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar(); }
// baz();

//--------------------------------------------------------


// #4

// function foo() {
//     foo();
// }
// foo();


//--------------------------------------------------------

// #5

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('long...');
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('short Running');
// }

// longRunning();
// shortRunning



//--------------------------------------------------------

// #6

/*

    <button class="veg">button-1</button>
    <button class="non-veg">button-2</button>

*/

// console.log('start..');
// $.on('.veg', 'click', function vegHandler(e) {
//     console.log('handling event on .veg elements');
// });
// $.on('.non-veg', 'click', function nonVegHandler(e) {
//     console.log('handling event on .non-veg elements');
// });
// console.log('cont with other work..');
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();



//--------------------------------------------------------


// #7

// console.log("-start-");

// //  IO
// setTimeout(function timeout() {
//     console.log('after timeout...');
// }, 0);
// console.log('cont with other work..');
// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('long...');
//         i++;
//     }
// }
// longRunning();



//--------------------------------------------------------


// Quiz

function teach() {
    let tnrName = "Nag";// move to 'heap' before teach-scope vanished
    let fun="bla bla";
    try {
        console.log(tnrName + '-teaching topic-1');
        // throw new Error('hate topic-1');
        setTimeout(() => {
            console.log(tnrName + '-teaching topic-2');
            //throw new Error('hate topic-2');
            console.log('teaching topic-2 end');
        }, 5000);
        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('i caught :' + e.message);
    }
}
teach();





