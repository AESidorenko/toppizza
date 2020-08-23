import React, {Component} from 'react';
import App from '../app';

class MenuItem extends Component
{
    constructor(props)
    {
        super(props);

        this.handleClickAddToCart      = this.handleClickAddToCart.bind(this);
        this.handleClickRemoveFromCart = this.handleClickRemoveFromCart.bind(this);
        this.getCountInCart            = this.getCountInCart.bind(this);
    }

    handleClickAddToCart(e)
    {
        this.props.onAddToCart(this.props.item.id);
    }

    handleClickRemoveFromCart(e)
    {
        this.props.onRemoveFromCart(this.props.item.id);
    }

    getCountInCart(id)
    {
        return App.getCountInCart(id) ?? 0;
    }

    render()
    {
        return (
            <div className="card mb-4">
                {/* todo: make real images URL */}
                <img className="card-img-top" src={'https://img.pizza/350/250?' + this.props.item.id.toString()} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{this.props.item.title}</p>
                </div>
                <div className="card-footer">
                    {
                        this.getCountInCart(this.props.item.id) === 0 ? (
                            <button
                                className="btn btn-success btn-add-to-cart"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickAddToCart}
                            >Add to cart</button>
                        ) : (
                            <div>
                                <button
                                    className="btn btn-success btn-remove-from-cart"
                                    id={'remove-from-cart-' + this.props.item.id.toString()}
                                    onClick={this.handleClickRemoveFromCart}
                                >-
                                </button>
                                <span>x{this.getCountInCart(this.props.item.id)}</span>
                                <button
                                    className="btn btn-success btn-add-to-cart"
                                    id={'add-to-cart-' + this.props.item.id.toString()}
                                    onClick={this.handleClickAddToCart}
                                >+1
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MenuItem;