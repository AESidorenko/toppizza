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
            items.data.forEach((item) => item.countInCart = 0);
            this.setState({items: items.data, loading: false});
            this.itemRefs = Array(items.data.length).fill(null).map(() => React.createRef());
            console.log('Set after loading: ', this.state);
        });
    }

    addToCart(itemId)
    {
        App.addToCart(itemId);
        this.updateFromCart();
    }

    updateFromCart()
    {
        const cart  = App.getCart(),
              items = JSON.parse(JSON.stringify(this.state.items));

        console.log('Cart: ', cart);
        console.log('this.state.items: ', this.state.items);
        console.log('items: ', items);

        items.map((item, index) => items[index].countInCart = cart.get(item.id) ?? 0);
        items.map((item, index) => console.log(items[index], cart.get(item.id) ?? 0));

        this.setState({items: items}, function() {
            console.log('items after: ', items);
            console.log('this.state.items after: ', this.state);
        });

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