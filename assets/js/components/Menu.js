import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';
import App from '../app';

class Menu extends Component
{
    constructor()
    {
        super();
        this.state = {
            items:   [],
            loading: true,
        };

        this.itemRefs = [];

        this.addToCart = this.addToCart.bind(this);
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
            items.data.forEach((item) => item.count = 0);
            this.setState({items: items.data, loading: false});
            this.itemRefs = Array(items.data.length).fill(null).map(() => React.createRef());
        });
    }

    addToCart(itemId)
    {
        App.addToCart(itemId);
        console.log(itemId, App.getCart());
        // this.updateFromCart();
    }

    updateFromCart()
    {
        const cart = App.getCart();

        this.state.items.map((item, index) => this.state.items[index].count = cart[index]);

        console.log(this.state.items);
    }

    render()
    {
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
                                          onAddCart={this.addToCart}
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