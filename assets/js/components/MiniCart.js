import React, {Component} from 'react';

class MiniCart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            itemsTotal: [...this.props.cart].reduce((s, i) => s += i[1], 0),
        };

        this.updateFromCart = this.updateFromCart.bind(this);
    }

    handleToCart()
    {
        window.location = '/cart';
    }

    updateFromCart()
    {
        this.setState({itemsTotal: [...this.props.cart].reduce((s, i) => s += i[1], 0)});
    }

    render()
    {
        return (
            <div>
                {
                    this.state.itemsTotal > 0 ?
                        <button type="button" className="btn btn-success" onClick={this.handleToCart}>Items in cart: <span
                            className="badge badge-warning">{this.state.itemsTotal}</span></button> :
                        <button type="button" className="btn btn-outline-danger disabled">Cart empty</button>
                }
            </div>
        );
    }
}

export default MiniCart;