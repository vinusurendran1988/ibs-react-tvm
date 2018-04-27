import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          code: '111',
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          code: '222',
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }
  renderProducts() {
    let { products} = this.state;
    return products.map((item, idx) => {
      return (<Product product={item} key={idx} />)
    });
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/#">shopIT</a>
        </nav>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
