import React, { Component } from 'react';

export default class SubTotal extends Component {

    render() {

        return (
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto">
                    <h4>SubTotal</h4>

                </div>

                <div className="col-md-6 mx-auto">
                    <p>{`$${this.props.price}`}</p>

                </div>
            </div>
        )
    }
}