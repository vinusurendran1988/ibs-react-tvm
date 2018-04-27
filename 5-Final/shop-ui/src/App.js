import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

import store from './store';
import { loadProducts } from './actions/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    };
  }
  componentDidMount() {
 
    let state = store.getState();
    let products = state.products;
    this.setState({ products });

    store.subscribe(() => {
      let state = store.getState();
      let products = state.products;
      let cart = state.cart;
      this.setState({ products, cart });
    });

    store.dispatch(loadProducts());

  }
  renderProductItems() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (<Product product={item} key={idx} />)
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
