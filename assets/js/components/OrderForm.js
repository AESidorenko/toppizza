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
                'items':          [...this.props.cart.entries()],
                'contacts':       {
                    'username': document.getElementById('username').value,
                    'address':  document.getElementById('userAddress').value,
                    'phone':    document.getElementById('contactPhone').value,
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

    validateForm()
    {
        const nameInput    = document.getElementById('clientName');
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
                            <input type="text" maxLength="255" className="form-control" id="clientName" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="userAddress" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-4">
                            <input type="text" maxLength="255" className="form-control" id="userAddress" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contactPhone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-4">
                            <input type="tel" maxLength="32" className="form-control" id="contactPhone" onChange={this.validateForm}/>
                        </div>
                    </div>
                    <button type="button" id="btnSubmitOrder" className="btn btn-primary" onClick={this.handleOrderSubmit}>Submit order</button>
                </form>
            </div>
        );
    }
}

export default OrderForm;