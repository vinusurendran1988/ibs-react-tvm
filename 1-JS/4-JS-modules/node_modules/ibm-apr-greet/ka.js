
//---------------------------------------------------------
// var o = {
//     doWork: function () {
//         console.log('im Mod3');
//     }
// };
//---------------------------------------------------------
//IIFE / self-executable function
// var ibmApp = ibmApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im Mod3');
//         }
//     };
//     ibmApp.mod3 = o;
// })();

//---------------------------------------------------------

// commonJS
console.log('/greet/ka.js');
function greet() {
    console.log('namaskara...');
}
module.exports = greet;