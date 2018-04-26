import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log('Greeting :: constructor()');
        // this.state = {serverMessage: ''};
        // this.state = {clock: new Date().toTimeString()}
    }
    componentWillMount() {
        console.log('Greeting :: componentWillMount()');
    }
    render() {
        console.log('Greeting :: render()');
        // let message = this.props.message;
        // or
        let { message } = this.props; // es6 -> destructuring
        return (
            <div className="alert alert-info">
                <span className="badge badge-dark">
                    {message}
                </span>
                <hr />
                {/* {this.state.serverMessage} */}
                {/* {this.state.clock} */}
                {new Date().toTimeString()}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');

        // n/w call

        //setTimeout(() => {
        //let serverMessage = "Hello!! from server-side";
        //this.setState({ serverMessage });
        //}, 3000);

        this.interval = setInterval(() => {
            //this.setState({ clock: new Date().toTimeString() });
            this.forceUpdate();
        }, 500);
    }
    componentWillReceiveProps(nextProps) {
        console.log('Greeting :: componentWillReceiveProps()');
        //console.log(this.props);
        //console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Greeting :: componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Greeting :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }
}
Greeting.propTypes = {
    message: PropTypes.string
};
Greeting.defaultProps = {
    message: 'i dont know what to greet'
};
Greeting.displayName = "ibs-greeting";

export default Greeting;