

/*

scope / execution-context
------------------------------------------------------------------   

 ==> memory/stack-frame with given args & local variables

 ------------------------------------------------------------------
 phase-1 : creation / push

            ==> any variable declared with 'var' keyword any-where in that scope,
                will get 'hoist' with default-value ( undefined )

 phase-2 : execution / pop

            ==> instructions will get execute in seq
------------------------------------------------------------------
 imp-note:

    ==> every .js-runtime has 1 global-scope & global-object ( fixed )
    ==> global-scope always executd by 'global-object'

    global-object:

        browser  ==> window
        Node.js  ==> process

    ==> every function-invoction creates new-scope, 
        which is child of in which scope that function has declared      
 

    best-practice : declare variables in top ( file | function )

*/

// ------------------------------------------------------------------

// var v=12;
// console.log(v);

// ------------------------------------------------------------------


// var v = 12;
// function f1() {
//     console.log(v);
//     var v = 13;
// }
// f1(); // f1-scope  <-- global-scope

// ------------------------------------------------------------------

//  Quiz

// var v = 12;
// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2();  // f2-scope <--- f1-scope
//     var v = 13;
// }

// f1(); // f1-scope  <-- global-scope

// ------------------------------------------------------------------
// var v = 12;
// var v = 13;
// ------------------------------------------------------------------
// var v = 100;
// if (true) {
//     var v = 200;
// }
// console.log(v);
// ------------------------------------------------------------------
/*

    problems with 'var' keyword

    ==> variable always get hoist
    ==> we can re-declare same variable multiple times within context
    ==> no block-scope to variables

    soln:

    => using 'let' & 'const' keywords with block-scope  ( from ES6)

*/
// ------------------------------------------------------------------

// console.log(v); // Error
// let v=12;

// ------------------------------------------------------------------

// let v = 12;
// let v = 13; // we cannot re-declare

// ------------------------------------------------------------------

// var v=100;
// if(true){
//     let v=200;
// }
// console.log(v);

// ------------------------------------------------------------------

// const v = 12;
// v = 13;


// const person = { name: 'Nag' }
// // person = null; // error , we cant change reference
// person.name="Nag N"; // but we can mutate data



// ------------------------------------------------------------------

// summary

//   ==> avoid using 'var' keyword
//   ==> use 'let' keyword , for mutable reference
//   ==> use 'const' keyword , for immutable reference

// ------------------------------------------------------------------
