
// step-1 : create component-class
// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge badge-primary' }, "we need break");
//         let divEle = React.createElement(
//             'div',
//             { className: 'alert alert-info' },
//             spanEle
//         );
//         return divEle;
//     }
// }

// or using JSX

class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-danger">
                <span className="badge badge-primary">have break</span>
            </div>
        );
    }
}

// step-2 : instantiate component-class
//let greeting1 = React.createElement(Greeting, null, null);
// or
let greeting1 = 
ReactDOM.render(greeting1, document.getElementById('root'));
