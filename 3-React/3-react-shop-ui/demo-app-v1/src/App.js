import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import classNames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curretTab: 1,
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
  changeTab(tabIndex) {
    this.setState({ curretTab: tabIndex })
  }
  renderBuyBtn(product) {
    if (product.canBuy) {
      return (<button className="btn btn-primary">buy</button>)
    } else {
      return null;
    }
  }
  renderTabPanel(product) {
    let { curretTab } = this.state;
    let panel;
    switch (curretTab) {
      case 1:
        panel = (<div><p>{product.description}</p></div>)
        break;
      case 2:
        panel = (<div><p>Not Yet</p></div>)
        break;
      case 3:
        panel = (<div><p>None Yet</p></div>)
        break;
      default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, curretTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img className="img-fluid" src={product.image} alt="product" />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={() => { this.changeTab(1) }} className={classNames('nav-link', { active: curretTab === 1 })} href="/#">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => { this.changeTab(2) }} className={classNames('nav-link', { active: curretTab === 2 })} href="/#">Specification</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => { this.changeTab(3) }} className={classNames('nav-link', { active: curretTab === 3 })} href="#">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
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
