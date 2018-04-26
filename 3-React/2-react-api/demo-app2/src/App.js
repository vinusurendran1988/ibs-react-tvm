import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Product from './components/Product';
import Employee from './components/Employee';
import Parent from './components/Parent';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('App :: constructor()');
    this.state = {
      greetMessage: 'greetings'
    }
  }
  changeGreetMessage(greetMessage) {
    this.setState({ greetMessage });
  }
  showGreeting() {
    let { greetMessage } = this.state;
    if (greetMessage) {
      return (<Greeting message={greetMessage} />)
    } else {
      return null;
    }
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <hr />
        <h1>react component : lifecycle</h1>
        <hr />
        <button onClick={() => { this.changeGreetMessage("good morning") }} className="btn btn-dark">GM</button>
        <button onClick={() => { this.changeGreetMessage("good noon") }} className="btn btn-dark">GN</button>
        <button onClick={() => { this.changeGreetMessage("good evening") }} className="btn btn-dark">GE</button>
        <button onClick={() => { this.changeGreetMessage("") }} className="btn btn-danger">Remove</button>
        <hr />
        {/* {this.showGreeting()} */}
        <hr />
        {
          /* 
          <Box>
            <Product />
            <Product />
          </Box>
          <Box>
            <Employee />
            <Employee />
          </Box> */
        }
        <hr />
        <Parent />
      </div>
    );
  }
}

export default App;
