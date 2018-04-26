
//---------------------------------------------------------
// var o = {
//     doWork: function () {
//         console.log('im Mod2');
//     }
// };
//---------------------------------------------------------
//IIFE / self-executable function
// var ibmApp = ibmApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im Mod2');
//         }
//     };
//     ibmApp.mod2 = o;
// })();

//---------------------------------------------------------

// commonJS
console.log('/greet/en.js');
function greet() {
    console.log('good morning...');
}
module.exports = greet;