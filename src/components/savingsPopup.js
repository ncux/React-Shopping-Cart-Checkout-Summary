import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const HtmlTooltip = withStyles(theme => ({
    tooltip: {
        textAlign: 'center',
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);


export default class SavingsPopup extends Component {

    render() {

        return (
            <div className="row mx-auto">

                <div className="col-md-6 mx-auto">
                    <HtmlTooltip
                        title={
                            <React.Fragment>
                                <Typography color="inherit">Save on your order</Typography>
                                {"In-store pickup will save you some money!"}{' '}<br />
                            </React.Fragment>
                        }
                    >
                        <Button>Savings</Button>
                    </HtmlTooltip>
                </div>

                <div className="col-md-6 mx-auto">
                    <p>$ { this.props.savings }</p>
                </div>

            </div>
        )
    }
}