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
        this.updateFromCart = this.updateFromCart.bind(this);
        this.loadItems      = this.loadItems.bind(this);
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        axios.get(`/api/menu`)
            .then(items => {
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

    updateFromCart()
    {
        // const cart = new Map();
        //
        // [...this.state.cart].forEach((i) => cart.set(i[0], i[1]));
        //
        // this.setState({cart: cart});
        this.setState({cart: new Map([...App.getCart()])});
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