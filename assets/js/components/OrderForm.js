import React, {Component} from 'react';
import axios from 'axios';
import CartStorage from '../cart-storage';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

class OrderForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cartStorage: new CartStorage(),
        };

        this.nameInput    = React.createRef();
        this.addressInput = React.createRef();
        this.phoneInput   = React.createRef();

        this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
        this.handleChange      = this.handleChange.bind(this);
    }

    handleOrderSubmit()
    {
        if (!this.validateForm()) {
            return;
        }

        axios({
            method: 'post',
            url:    '/api/order',
            data:   {
                'items':          [...this.props.cart.entries()],
                'contacts':       {
                    'username': this.props.clientName,
                    'address':  this.props.clientAddress,
                    'phone':    this.props.clientPhone,
                },
                'usdRate':        1.15, //todo: make configurable
                'totalPrice':     this.props.totalPrice,
                'idempotencyKey': this.state.cartStorage.getIdempotencyKey(),
            },
        })
            .then((response) => {
                if (response.status != 200) {
                    this.props.onError();
                    return;
                }

                this.state.cartStorage.reset();
                this.state.cartStorage.updateIdempotencyKey();
                this.props.onDone();
            })
            .catch(() => {
                this.props.onError();
            });
    }

    handleChange(e)
    {
        this.props.onChange(e);
    }

    validateForm()
    {
        const fails = [this.nameInput.current, this.addressInput.current, this.phoneInput.current].reduce((fails, element) => {
            if (element.value === '') {
                element.classList.add(...['border', 'border-danger']);
                return 1;
            }
            element.classList.remove(...['border', 'border-danger']);
            return 0;
        }, 0);

        return fails === 0;
    }

    render()
    {
        return (
            <div className="mt-5">
                <h4>Please fill in the form below to make an order:</h4>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input type="text" maxLength="255" className="form-control" id="clientName" ref={this.nameInput} value={this.props.clientName}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="clientAddress" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-4">
                            <input type="text" maxLength="255" className="form-control" id="clientAddress" ref={this.addressInput}
                                   value={this.props.clientAddress}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="clientPhone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-4">
                            <input type="tel" maxLength="32" className="form-control" id="clientPhone" ref={this.phoneInput} value={this.props.clientPhone}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button type="button" id="btnSubmitOrder" className="btn btn-primary" onClick={this.handleOrderSubmit}>Submit order</button>
                </form>
            </div>
        );
    }
}

export default OrderForm;