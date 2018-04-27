import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ViewCart extends Component {

    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let item = itemLine.item;
            let qty = itemLine.qty;
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{qty}</td>
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
export default ViewCart;