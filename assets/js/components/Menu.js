import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';
import App from '../app';

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cart:    props.cart,
            items:   [],
            loading: true,
        };

        this.itemRefs = [];

        this.addToCart      = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        if (App.isUserLoggedIn()) {
            // todo: use loaded cart
        } else {
            // todo: (re)create cart from local storage
            App.resetCart();
            // App.loadCartFromLocalStrorage();
        }

        axios.get(`/api/menu`).then(items => {
            items.data.forEach((item) => item.countInCart = 0);
            this.setState({items: items.data, loading: false});
            this.itemRefs = Array(items.data.length).fill(null).map(() => React.createRef());
        });
    }

    addToCart(itemId)
    {
        App.addToCart(itemId);
        this.updateFromCart();
    }

    removeFromCart(itemId)
    {
        App.removeFromCart(itemId);
        this.updateFromCart();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('Menu did update');
    }

    updateFromCart()
    {
        const items = [...this.state.items];

        items.forEach(item => item.countInCart = this.props.cart.get(item.id) ?? 0);

        this.setState({items});
    }

    render()
    {
        console.log('Menu re-render');

        return (
            <div>
                {this.state.loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <div className={'row'}>
                        {this.state.items.map((item, index) =>
                            <div className="col-12 col-xs-6 col-sm-4" key={item.id}>
                                <MenuItem item={item}
                                          onAddToCart={this.addToCart}
                                          onRemoveFromCart={this.removeFromCart}
                                          ref={this.itemRefs[index]}
                                ></MenuItem>
                            </div>,
                        )}
                    </div>
                )}
            </div>
        );
    }

}

export default Menu;