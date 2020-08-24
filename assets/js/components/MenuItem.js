import React, {Component} from 'react';
import Config from '../config';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                <div className="thumbnail-container">
                    <img className="card-img-top thumbnail" src={'https://img.pizza/350/250?' + this.props.item.id.toString()} alt="Card image cap"></img>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.item.title}</p>
                    <hr/>
                    <p className="text-secondary"><small>{this.props.item.description}</small></p>
                </div>
                <div className="card-footer text-center">
                    {
                        this.state.itemCount === 0 ? (
                            <button
                                className="btn btn-danger btn-add-to-cart btn-sm"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickAddToCart}
                            >Add to cart +{Config.currencyStringRule(this.props.item.price, this.props.currencyCode)}</button>
                        ) : (
                            <div className="text-center">
                                <button
                                    className="btn btn-secondary btn-remove-from-cart float-left btn-sm"
                                    id={'remove-from-cart-' + this.props.item.id.toString()}
                                    onClick={this.handleClickRemoveFromCart}
                                ><FontAwesomeIcon icon={faMinus}/>
                                </button>
                                <span className="w-100 text-center">x{this.state.itemCount}</span>
                                <button
                                    className="btn btn-danger btn-add-to-cart float-right btn-sm"
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