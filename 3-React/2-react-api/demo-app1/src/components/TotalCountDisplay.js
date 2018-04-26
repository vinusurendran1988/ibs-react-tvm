import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        return (
            <div className="alert alert-warning">
                Total count : <span className="badge badge-primary">{this.props.value}</span>
            </div>
        );
    }
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
};
TotalCountDisplay.defaultProps = {
    value: 0
}
export default TotalCountDisplay;