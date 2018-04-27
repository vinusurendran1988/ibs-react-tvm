import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  renderProductItems() {
    let { products } = this.props;
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
    let { cart } = this.props
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

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  }
}

export default connect(mapStateToProps, null)(App);
