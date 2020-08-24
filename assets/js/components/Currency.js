import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

class Currency extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            value: props.value,
        };

        this.setCurrency = this.setCurrency.bind(this);
    }

    setCurrency(currencyCode)
    {
        this.setState({value: currencyCode});
        this.props.onChange(currencyCode);
    }

    render()
    {
        return (
            <div>
                <a type="link" onClick={() => this.setCurrency('EUR')} className={'currency ' + (this.state.value === 'EUR' ? 'currency-active' : '')}>EUR</a>
                <a type="link" onClick={() => this.setCurrency('USD')} className={'currency ' + (this.state.value === 'USD' ? 'currency-active' : '')}>USD</a>
            </div>
        );
    }

}

export default Currency;