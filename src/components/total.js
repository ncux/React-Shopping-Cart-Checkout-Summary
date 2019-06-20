import React, { Component } from 'react';

export default class Total extends Component {

    render() {

        return (
            <div className="row mx-auto">

                <div className="col-md-6 mx-auto">
                    <h2>Total</h2>
                </div>

                <div className="col-md-6 mx-auto">
                    <h2>$ { this.props.amountToPay }</h2>
                </div>

            </div>
        )
    }
}