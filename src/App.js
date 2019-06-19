import React, { Component } from 'react';
import './App.css';

import SubTotal from './components/subtotal';

class App extends Component {

    state = {
        total: 100,
    };

    render() {
        return (
            <div className="container-fluid text-center text-primary mt-5">
                <div className="row mx-auto">
                    <div className="col-8 mx-auto">

                        <div className="purchase-card">
                            <SubTotal price={ this.state.total.toFixed(2) } />

                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default App;
