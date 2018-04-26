import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ActionButton from './components/ActionButton';
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //console.log(props);
    this.state = {
      totalCount: 0
    }
  }
  incrementTotalCount() {
    this.setState({ totalCount: this.state.totalCount + 1 })
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <hr /><h1>{this.props.title}</h1><hr />
        <div className="card">
          <div className="card-header">
            counter-app : <span className="badge badge-primary">{this.state.totalCount}</span>
          </div>
          <div className="card-body">
            <ActionButton
              value="10"
              onAction={() => { this.incrementTotalCount() }} />
            <ActionButton
              value="-10"
              onAction={() => { this.incrementTotalCount() }}
            />
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay value={this.state.totalCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
