import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},  // {code:{item,qty}}
      isCartOpen: false,
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
  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
  }
  addToCart(item) {
    let { cart } = this.state
    let code = item.code;
    let itemLine = cart[code];
    if (itemLine) {
      itemLine = { [code]: { item: itemLine.item, qty: itemLine.qty + 1 } }
    } else {
      itemLine = { [code]: { item, qty: 1 } }
    }
    this.setState({ cart: Object.assign({}, cart, itemLine) });
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (<Product product={item} key={idx} onBuy={(item) => { this.addToCart(item) }} />)
    });
  }
  renderProductsOrCart() {
    let { isCartOpen } = this.state;
    if (isCartOpen) {
      return (<ViewCart cart={this.state.cart} />)
    } else {
      return (
        <div>
          <hr />
          <div className="list-group">
            {this.renderProducts()}
          </div>
        </div>
      )
    }
  }
  render() {
    let { cart } = this.state
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/#">shopIT</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>
        {Object.keys(cart).length} item(s) in cart
        <span className="pull-right"><a href="/#" onClick={() => { this.toggleCart() }}>{this.state.isCartOpen ? 'view products' : 'view cart'}</a></span>
        <hr />
        {this.renderProductsOrCart()}
      </div>
    );
  }
}

export default App;
