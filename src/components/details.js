import React, { Component } from 'react';
import dildo from '../assets/images/dildo.jpg';


const details = {
  display: 'none'
};

export default class Details extends Component {

    state = {
        open: false,
    };

    displayDetails = () => {
        this.setState({ open: !this.state.open });
    };

    render() {

        return (
            <div className="">
                <a onClick={ this.displayDetails } className="btn btn-block">
                    { this.state.open === false ? (<span>See</span>) : (<span>Hide</span>) } item details
                    { this.state.open === false ? (<span> +</span>) : (<span> -</span>) }
                </a>

                { this.state.open === false ? null : (

                    <div className="media">
                        <img src={dildo} style={{width: '160px', height: '160px'}} className="align-self-start mr-3" alt="Item image" />
                        <div className="media-body text-justify">
                            <h5 className="mt-0">8'' black dildo</h5>
                            <h6>$ { this.props.price }</h6>
                            <h6 className="price-strike-through">$ { this.props.price }</h6>
                            I really don't understand the mindset of people like this. They'll argue that refugees are too violent / criminal
                            then turn around and pull that kind of shit themselves.
                        </div>
                    </div>
                ) }

            </div>
        )
    }
}