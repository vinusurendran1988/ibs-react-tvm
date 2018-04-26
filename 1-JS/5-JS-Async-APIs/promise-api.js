
// hotel.js
//------------------------------------------------------------------
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log('swiggy resolving/rejecting promise..');
                //reject('d-boys r busy'); return;
                setTimeout(() => {
                    console.log('swiggy resolving/rejecting promise..');
                    resolve("Biryani");
                }, 5000)
            }, 3000);
        });
        return promise;
    }
};

//------------------------------------------------------------------
// bar.js
//------------------------------------------------------------------

let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolving/rejecting promise..');
                resolve("BEER");
                //reject("NO BEER");
            }, 2000)
        });
        return promise;
    }
};

//------------------------------------------------------------------

// person.js
//------------------------------------------------------------------
let person = {
    doWork: function () {
        console.log('person working....');
        console.log('feels hungry....requesting food on swiggy & beer on bar');
        let promise = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise, deferring my eating actions to future');
        Promise.race([promise, promise2]).then((result) => {
            console.log('yummy - ' + result);
        }, (error) => {
            console.log('oops -' + error);
        });
        console.log('cont with other work... end.');
    }
}

//------------------------------------------------------------------

// person.doWork();

//------------------------------------------------------------


let promise = fetch('https://jsonplaceholder.typicode.com/todos')

let newPromise = promise
                    .then(resp=>resp.json())
                    .then(todos=>console.log(todos))
  