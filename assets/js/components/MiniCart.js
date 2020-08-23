import React, {Component} from 'react';
import App from '../app';

class MiniCart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cart: props.cart, // todo: check - needed?
        };

        this.handleToCart   = this.handleToCart.bind(this);
        this.getItemsCount  = this.getItemsCount.bind(this);
        this.updateFromCart = this.updateFromCart.bind(this);
    }

    handleToCart()
    {
        App.touchCart();
        window.location = '/cart';
    }

    updateFromCart()
    {
        // const cart = new Map();
        //
        // [...this.state.cart].forEach((i) => cart.set(i[0], i[1]));

        this.setState({cart: new Map([...App.getCart()])});
    }

    getItemsCount()
    {
        return [...this.state.cart].reduce((s, i) => s += i[1], 0);
    }

    render()
    {
        return (
            <div>
                {
                    this.getItemsCount() > 0 ?
                        <button type="button" className="btn btn-success" onClick={this.handleToCart}>Items in cart: <span
                            className="badge badge-warning">{this.getItemsCount()}</span></button> :
                        <button type="button" className="btn btn-outline-danger disabled">Cart empty</button>
                }
            </div>
        );
    }
}

export default MiniCart;