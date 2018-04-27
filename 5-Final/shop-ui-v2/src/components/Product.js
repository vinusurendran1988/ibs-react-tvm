import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadReviews, addNewReview } from '../actions/reviews';
import { buy } from '../actions/cart';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
        };
    }
    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { product, actions } = this.props;
                actions.loadReviews(product.id);
            }
        })
    }
    handleReview(review) {
        let { product, actions } = this.props;
        actions.addNewReview(product.id, review);
    }
    handleBuyBtnClick() {
        let { product, actions } = this.props;
        actions.buy(product, 1);
    }
    renderBuyBtn(product) {
        if (product.canBuy) {
            return (<button onClick={() => { this.handleBuyBtnClick() }} className="btn btn-primary">buy</button>)
        } else {
            return null;
        }
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }
    renderTabPanel(product) {
        let { currentTab } = this.state;
        let panel;
        switch (currentTab) {
            case 1:
                panel = (<div><p>{product.description}</p></div>)
                break;
            case 2:
                panel = (<div><p>Not Yet</p></div>)
                break;
            case 3:
                panel = (
                    <div>
                        {this.props.status.message}
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onNewReview={(review) => { this.handleReview(review) }} />
                    </div>
                )
                break;
            default:
                panel = null;
        }
        return panel;
    }
    render() {
        let { product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3">
                            <img className="img-fluid" src={product.image} alt="product" />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>{product.name}</h5>
                            <h6>&#8377;{product.price}</h6>
                            {this.renderBuyBtn(product)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a onClick={() => { this.changeTab(1) }} className={classNames('nav-link', { active: currentTab === 1 })} href="#">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => { this.changeTab(2) }} className={classNames('nav-link', { active: currentTab === 2 })} href="#">Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => { this.changeTab(3) }} className={classNames('nav-link', { active: currentTab === 3 })} href="#">Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Product.propTypes = {
    product: PropTypes.object
}



function mapStateToProps(state, props) {
    let { product } = props;
    let reviews = state.reviews[product.id];
    reviews = reviews || [];
    return {
        reviews,
        status: state.status
    }
}

function mapDispatchToProps(dispatch) {
    let actions = { loadReviews, addNewReview, buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);