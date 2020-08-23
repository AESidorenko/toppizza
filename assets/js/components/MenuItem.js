import React, {Component} from 'react';
import Config from '../config';

class MenuItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            itemCount: props.itemCount,
        };

        this.handleClickAddToCart      = this.handleClickAddToCart.bind(this);
        this.handleClickRemoveFromCart = this.handleClickRemoveFromCart.bind(this);
    }

    handleClickAddToCart(e)
    {
        this.setState((state) => {
            return {itemCount: state.itemCount + 1};
        }, function() {
            this.props.onCountChanged(this.props.item.id, this.state.itemCount);
        });
    }

    handleClickRemoveFromCart(e)
    {
        this.setState((state) => {
            return {itemCount: state.itemCount > 0 ? (state.itemCount - 1) : 0};
        }, function() {
            this.props.onCountChanged(this.props.item.id, this.state.itemCount);
        });
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
                        this.state.itemCount === 0 ? (
                            <button
                                className="btn btn-success btn-add-to-cart"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickAddToCart}
                            >Add to cart +{Config.currencyStringRule(this.props.item.price, this.props.currencyCode)}</button>
                        ) : (
                            <div>
                                <button
                                    className="btn btn-success btn-remove-from-cart"
                                    id={'remove-from-cart-' + this.props.item.id.toString()}
                                    onClick={this.handleClickRemoveFromCart}
                                >-
                                </button>
                                <span>x{this.state.itemCount}</span>
                                <button
                                    className="btn btn-success btn-add-to-cart"
                                    id={'add-to-cart-' + this.props.item.id.toString()}
                                    onClick={this.handleClickAddToCart}
                                >+{Config.currencyStringRule(this.props.item.price, this.props.currencyCode)}
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