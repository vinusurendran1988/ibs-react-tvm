import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        console.log('ActionButton :: constructor()');
        this.state = {
            count: 0
        }
    }
    handleBtnClick() {
        this.setState({ count: this.state.count + 1 }, () => {
            this.props.onAction();
        })
    }
    render() {
        console.log('ActionButton :: render()');
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-primary" onClick={() => { this.handleBtnClick() }}>
                            {this.props.value} : &nbsp;
                            <span className="badge badge-danger">{this.state.count}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    value: PropTypes.string,
    onAction: PropTypes.func
};
ActionButton.defaultProps = {
    value: 'hit'
};

export default ActionButton;