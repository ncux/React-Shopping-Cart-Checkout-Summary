import React, { Component } from 'react';
import { connect } from "react-redux";
import handleChange from '.././actions/discountCodeActions';

class DiscountCode extends Component {

    state = {
      open: false,
      // discountCode: ''
    };

    getDiscount = () => {
        this.setState({ open: !this.state.open });
    };

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.grantDiscount();

        this.setState({ [e.target.name]: '' });
    };

    render() {

        return (
            <div>
                <a onClick={ this.getDiscount } className="btn btn-block">
                    { this.state.open === false ? (<span>Apply </span>) : (<span>Hide</span>) } discount code
                    { this.state.open === false ? (<span> +</span>) : (<span> -</span>) }
                </a>

                { this.state.open === false ? null : (

                    <div className="media">
                       <form onSubmit={ this.onFormSubmit }>
                           <div className="form-group">
                               {/*<label>Discount code</label>*/}
                               <input name="discountCode"
                                      value={ this.props.discountCode }
                                      onChange={ this.onInputChange }
                                      placeholder="Enter discount code"
                                      className="form-control form-control-lg" />
                                <button type="submit" disabled={ this.props.disabled } className="btn btn-block btn-success py-2 mt-3">
                                    Apply discount code
                                </button>
                           </div>
                       </form>
                    </div>
                ) }

            </div>
        )
    }
}

const mapStateToProps = state => ({
    discountCode: state.discountCode.value,
});

export default connect(mapStateToProps, { handleChange })(DiscountCode);