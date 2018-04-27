import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    };
  }
  componentDidMount() {
    let apiUrl = "http://localhost:8080/api/products";
    let promise = fetch(apiUrl);
    promise
      .then(response => response.json())
      .then(products => {
        this.setState({ products });
      });
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
  renderProductItems() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (<Product product={item} key={idx} onBuy={(item) => { this.addToCart(item) }} />)
    });
  }
  renderProducts() {
    return (
      <div>
        <hr />
        <div className="list-group">
          {this.renderProductItems()}
        </div>
      </div>
    )
  }
  render() {
    let { cart } = this.state
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">shopIT</Link>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i>
            {Object.keys(cart).length} item(s) in cart
            |
            <Link to="/products">view products</Link>
            <span className="pull-right">
              <Link to="/cart" >view cart</Link></span>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/products" render={() => this.renderProducts()} />
            <Route path="/cart" render={() => <ViewCart cart={cart} />} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
