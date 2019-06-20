import React, { Component } from 'react';

export default class TaxesAndShit extends Component {

    render() {

        return (
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto">
                    <h6>Estimated taxes and shit:</h6>
                </div>

                <div className="col-md-6 mx-auto">
                    <p>{this.props.taxes}</p>
                </div>
            </div>
        )
    }
}