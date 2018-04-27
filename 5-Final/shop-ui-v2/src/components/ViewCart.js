import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buy } from '../actions/cart'

class ViewCart extends Component {

    handleNewBuy(e, item) {
        let { actions } = this.props;
        actions.buy(item, 1);
    }
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total = 0;
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let item = itemLine.item;
            let qty = itemLine.qty;
            this.total += (item.price * qty);
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><input type="number" value={qty} onChange={(e) => { this.handleNewBuy(e, item) }} /></td>
                    <td>&#8377;{qty * item.price}</td>
                </tr>
            );
        });
    }

    renderCart() {
        let { cart } = this.props;
        if (Object.keys(cart).length === 0) {
            return (
                <div className="col-6 col-sm-5 col-md-5">
                    <div className="alert alert-info">
                        no item(s) in cart
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header">items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Unit-price</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCartItems()}
                            </tbody>
                        </table>
                        <hr />
                        Total : &#8377;{this.total}
                        <hr />
                        <button className="btn btn-primary"> checkout </button>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}
ViewCart.propTypes = {
    cart: PropTypes.object
};



function mapDispatchToProps(dispatch) {
    let actions = { buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ViewCart);