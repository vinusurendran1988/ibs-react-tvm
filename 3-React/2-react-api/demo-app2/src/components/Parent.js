import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types'

class Parent extends Component {
    getChildContext() {
        return { bankBalance: 10000.00 };
    }
    render() {
        return (
            <div className="alert alert-info">
                <Child />
                <Child />
            </div>
        );
    }
}

Parent.childContextTypes = {
    bankBalance: PropTypes.number
};
export default Parent;