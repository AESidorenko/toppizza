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
    }

    update(cart)
    {
        this.setState(prevState => {
            const newCart = new Map(cart);
            return Object.assign({}, prevState, {cart: newCart});
        });
    }

    componentDidMount()
    {
    }

    getItemsCount()
    {
        let sum = 0;
        this.state.cart.forEach(function(v) {
            sum += v;
        });
        return sum;
    }

    updateFromCart()
    {
        const items = [...this.state.items];

        items.forEach(item => item.countInCart = this.props.cart.get(item.id) ?? 0);

        this.setState({items});
    }

    render()
    {
        console.log('mini cart render', this.state.cart);

        return (
            <div>
                {
                    this.getItemsCount() > 0 ?
                        <a type="button" className="btn btn-success" href="/cart">Items in cart: <span
                            className="badge badge-warning">{this.getItemsCount()}</span></a> :
                        <button className="btn btn-outline-danger disabled">Cart empty</button>
                }
            </div>
        );
    }
}

export default MiniCart;