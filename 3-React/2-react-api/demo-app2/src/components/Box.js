import React, { Component } from 'react';

class Box extends Component {
    renderChildern() {
        let { children } = this.props;
        return children.map((child, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    {child}
                </div>
            );
        });
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="list-group">
                    {this.renderChildern()}
                </div>
            </div>
        );
    }
}

export default Box;