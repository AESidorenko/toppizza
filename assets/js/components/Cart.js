import React, {Component} from 'react';
import axios from 'axios';
import CartItem from './CartItem';

class Cart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            items:     [],
            loading:   true,
            cartEmpty: false,
        };

        this.itemRefs = [];

        this.loadItems          = this.loadItems.bind(this);
        this.handleCountChanged = this.handleCountChanged.bind(this);
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        axios({
            method: 'post',
            url:    '/api/cart',
            data:   {
                'items': [...this.props.cart].map((v) => v[0]),
            },
        })
            .then(({data}) => {
                console.log('Loaded', data);
                this.itemRefs    = Array(data.items.length).fill(null).map(() => React.createRef());
                const itemsTotal = [...this.props.cart].reduce((s, i) => s += i[1], 0);
                this.setState({items: data.items, loading: false, cartEmpty: itemsTotal === 0});
            });
    }

    handleCountChanged(itemId, newValue)
    {
        this.props.onItemCountChanged(itemId, newValue);

        const itemsTotal = [...this.props.cart].reduce((s, i) => s += i[1], 0);

        if (itemsTotal === 0) {
            this.setState({cartEmpty: true});
        }
    }

    render()
    {
        if (this.state.cartEmpty) {
            return (
                <div className="card">
                    <div className="card-body">
                        Your cart is empty.
                    </div>
                </div>
            );
        }

        return (
            <div>
                {this.state.loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    this.state.items.map((item, index) =>
                        <CartItem item={item}
                                  itemCount={this.props.cart.get(item.id) ?? 0}
                                  onCountChanged={this.handleCountChanged}
                                  ref={this.itemRefs[index]}
                                  key={index}
                        ></CartItem>, this)
                )
                }
            </div>
        );
    }
}

export default Cart;