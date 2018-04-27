import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';

class Review extends Component {
    renderStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push((<i style={{ color: 'red' }} key={i} className="fa fa-star"></i>));
        }
        return stars;
    }
    render() {
        let { review } = this.props;
        return (
            <div>
                <div className="col-10 col-sm-10 col-md-10">
                    <div className="alert alert-info">
                        {/* <span className="badge badge-dark">{review.stars}</span> */}
                        {this.renderStars(review.stars)}
                        &mdash;
                        <span className="badge badge-dark">{review.author}</span>
                        <hr />
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}
Review.propTypes = {
    review: PropTypes.object
}

export default Review;
