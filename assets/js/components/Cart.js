import React, {Component} from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import OrderForm from './OrderForm';
import Modal from './Modal';
import Config from '../config';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

class Cart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            items:          [],
            loading:        true,
            cartEmpty:      false,
            orderSubmitted: false,
            deliveryPrice:  0,
            currencyCode:   props.currencyCode,
            modal:          {
                title: '',
                text:  '',
            },
            showModal:      false,
            modalCallback:  this.hideModal,
            clientName:     '',
            clientAddress:  '',
            clientPhone:    '',
        };

        this.itemRefs = [];

        this.loadItems            = this.loadItems.bind(this);
        this.handleCountChanged   = this.handleCountChanged.bind(this);
        this.getTotalPrice        = this.getTotalPrice.bind(this);
        this.hideModal            = this.hideModal.bind(this);
        this.handleOrderSubmitted = this.handleOrderSubmitted.bind(this);
        this.handleOrderFailed    = this.handleOrderFailed.bind(this);
        this.setCurrencyCode      = this.setCurrencyCode.bind(this);
        this.handleChange         = this.handleChange.bind(this);
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        axios({
            method: 'post',
            url:    '/api/cart',
            data:   {
                'items':       [...this.props.cart].map((v) => v[0]),
                'username':    '',
                'password':    '',
                '_csrf_token': window.csrf_token,
            },
        })
            .then(({data}) => {
                if (data.items.length === 0) {
                    window.location = '/';
                }

                this.itemRefs    = Array(data.items.length).fill(null).map(() => React.createRef());
                const itemsTotal = [...this.props.cart].reduce((s, i) => s += i[1], 0);
                this.setState({
                    items:         data.items,
                    loading:       false,
                    cartEmpty:     itemsTotal === 0,
                    deliveryPrice: data.deliveryPrice,
                    clientName:    data.clientName,
                    clientAddress: data.clientAddress,
                    clientPhone:   data.clientPhone,
                });
            });
    }

    setCurrencyCode(currencyCode)
    {
        console.log(Config);
        this.setState({currencyCode: currencyCode});
    }

    handleChange(e)
    {
        const newState        = {};
        newState[e.target.id] = e.target.value;

        this.setState(newState);
    }

    handleOrderSubmitted()
    {
        this.setState({
            orderSubmitted: true,
            modal:          {
                title: 'Error occurred',
                text:  'Order submit failed, please try one more time',
            },
            showModal:      true,
            modalCallback:  function() {
                window.location = '/';
            },
        });
    }

    handleOrderFailed()
    {
        this.setState({
            modal:         {
                title: 'Error occurred',
                text:  'Order submit failed, please try one more time',
            },
            showModal:     true,
            modalCallback: this.hideModal,
        });
    }

    hideModal()
    {
        this.setState({
            modal:     {
                title: '',
                text:  '',
            },
            showModal: false,
        });
    }

    handleCountChanged(itemId, newValue)
    {
        this.props.onItemCountChanged(itemId, newValue);

        const itemsTotal = [...this.props.cart].reduce((s, i) => s += i[1], 0);
        this.setState({cartEmpty: itemsTotal === 0});
    }

    getTotalPrice()
    {

        return [...this.props.cart].reduce((s, i) => s += this.getItemPrice(i[0]) * i[1], 0) + this.state.deliveryPrice;
    }

    getItemPrice(itemId)
    {
        let price = 0;
        this.state.items.forEach((i) => {
            if (i.id === itemId) {
                price = i.price;
            }
        });

        return price;
    }

    render()
    {
        if (this.state.orderSubmitted) {
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            Thank you for your order! We will deliver it within an hour.
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.cartEmpty) {
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            Your cart is empty.
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <Modal show={this.state.showModal} handleClose={this.state.modalCallback} config={this.state.modal}></Modal>

                {this.state.loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    this.state.items.map((item, index) =>
                        <CartItem item={item}
                                  itemCount={this.props.cart.get(item.id) ?? 0}
                                  onCountChanged={this.handleCountChanged}
                                  currencyCode={this.state.currencyCode}
                                  ref={this.itemRefs[index]}
                                  key={index}
                        ></CartItem>, this)
                )
                }

                <div className="mt-3">+{Config.currencyStringRule(this.state.deliveryPrice, this.state.currencyCode)} for delivery</div>

                <div className="mt-3">Total price: {Config.currencyStringRule(this.getTotalPrice(), this.state.currencyCode)}</div>

                {this.state.cartEmpty ? '' : (
                    <OrderForm
                        onDone={this.handleOrderSubmitted}
                        onError={this.handleOrderFailed}
                        cart={this.props.cart}
                        totalPrice={this.getTotalPrice()}
                        clientName={this.state.clientName}
                        clientAddress={this.state.clientAddress}
                        clientPhone={this.state.clientPhone}
                        onChange={this.handleChange}
                    ></OrderForm>
                )}
            </div>
        );
    }
}

export default Cart;