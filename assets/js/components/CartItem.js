import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import Config from '../config';

class CartItem extends Component
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
        if (this.state.itemCount === 0) {
            return '';
        }

        return (
            <div className="row m-3">
                <div className="col-2">
                    <img className="img-thumbnail" src={'/img/' + this.props.item.thumbnail} alt="Card image cap"></img>
                </div>
                <div className="col-3">
                    <p><b>{this.props.item.title}</b></p>
                    <p><small className="text-secondary">{this.props.item.description}</small></p>
                </div>
                <div className="col-3">
                    <p>{Config.currencyStringRule(this.props.item.price * this.state.itemCount, this.props.currencyCode)}</p>
                </div>
                <div className="col-4 text-right">
                    {
                        this.state.itemCount === 1 ? (
                            <button
                                className="btn btn-success btn-add-to-cart"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickRemoveFromCart}
                            ><FontAwesomeIcon icon={faTrash}/></button>
                        ) : (
                            <button
                                className="btn btn-success btn-remove-from-cart"
                                id={'remove-from-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickRemoveFromCart}
                            ><FontAwesomeIcon icon={faMinus}/>
                            </button>
                        )
                    }
                    {<span className="ml-3 mr-3">x{this.state.itemCount}</span>}
                    {
                        <button className="btn btn-success btn-add-to-cart"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.handleClickAddToCart}
                        >+{Config.currencyStringRule(this.props.item.price, this.props.currencyCode)}
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default CartItem;