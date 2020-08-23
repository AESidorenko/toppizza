import React, {Component} from 'react';
import axios from 'axios';
import CartStorage from '../cart-storage';

class OrderForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cartStorage: new CartStorage(),
        };

        this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
    }

    componentDidMount()
    {
        this.validateForm();
    }

    handleOrderSubmit()
    {
        axios({
            method: 'post',
            url:    '/api/order',
            data:   {
                'items':          [...this.props.cart].map((v) => v[0]),
                'contacts':       {
                    'username': document.getElementById('username').value,
                    'address':  document.getElementById('userAddress').value,
                    'phone':    document.getElementById('contactPhone').value,
                },
                'idempotencyKey': this.state.cartStorage.getIdempotencyKey(),
            },
        })
            .then(({data}) => {
                this.state.cartStorage.updateIdempotencyKey();
            });
    }

    validateForm()
    {
        const nameInput    = document.getElementById('username');
        const addressInput = document.getElementById('userAddress');
        const phoneInput   = document.getElementById('contactPhone');

        const fails = [nameInput, addressInput, phoneInput].reduce((fails, element) => {
            if (element.value === '') {
                element.classList.add(...['border', 'border-danger']);
                return 1;
            }
            element.classList.remove(...['border', 'border-danger']);
            return 0;
        }, 0);

        if (fails === 0) {
            document.getElementById('btnSubmitOrder').classList.remove('disabled');
        } else {
            document.getElementById('btnSubmitOrder').classList.add('disabled');
        }
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
                            <input type="text" className="form-control" id="username" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="userAddress" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="userAddress" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contactPhone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-4">
                            <input type="tel" className="form-control" id="contactPhone" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <button type="button" id="btnSubmitOrder" className="btn btn-primary" onClick={this.handleOrderSubmit}>Submit order</button>
                </form>
            </div>
        );
    }
}

export default OrderForm;