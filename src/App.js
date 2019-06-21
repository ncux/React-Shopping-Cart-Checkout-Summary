import React, { Component } from 'react';
import './App.css';

import SubTotal from './components/subtotal';
import SavingsPopup from'./components/savingsPopup';
import TaxesAndShit from'./components/taxesAndShit';
import Total from "./components/total";
import Details from './components/details';
import Discount from "./components/discountCode";

class App extends Component {

    state = {
        price: 110,
        savings: 4.00,
        taxes: 0,
        amountToPay: 0,

        disableDiscountButton: false,
        discountCode: ''

    };

    componentDidMount() {
        this.setState({ taxes: 1.10 },
            async () => {
            await this.setState({ amountToPay: this.state.taxes * (this.state.price - this.state.savings)});
            console.log(`Final amount to pay: $ ${this.state.amountToPay}`);
        }
            );
    }

    grantDiscount = () => {

    };

    render() {
        return (
            <div className="container-fluid text-center text-primary mt-5">
                <div className="row mx-auto">
                    <div className="col-8 mx-auto">

                        <div className="purchase-card">
                            <SubTotal price={ this.state.price.toFixed(2) } /> <br />
                            <SavingsPopup savings={ this.state.savings.toFixed(2) } /> <br />
                            <TaxesAndShit taxes={ this.state.taxes.toFixed(2) } /> <br />
                            <hr />
                            <Total amountToPay={ this.state.amountToPay.toFixed(2) } />
                            <Details price={ this.state.amountToPay.toFixed(2) } /> <br />
                            <hr />
                            <Discount
                                grantDiscount={ () => this.grantDiscount() }
                                discountCode={ this.state.discountCode }
                                disabled={ this.state.disableDiscountButton }
                            />
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
