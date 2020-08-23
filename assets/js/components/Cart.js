import React, {Component} from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import OrderForm from './OrderForm';

class Cart extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            items:         [],
            loading:       true,
            cartEmpty:     false,
            deliveryPrice: 0,
        };

        this.itemRefs = [];

        this.loadItems          = this.loadItems.bind(this);
        this.handleCountChanged = this.handleCountChanged.bind(this);
        this.getTotalPrice      = this.getTotalPrice.bind(this);
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
                this.setState({
                    items:         data.items,
                    loading:       false,
                    cartEmpty:     itemsTotal === 0,
                    deliveryPrice: data.deliveryPrice,
                });
            });
    }

    handleCountChanged(itemId, newValue)
    {
        this.props.onItemCountChanged(itemId, newValue);

        const itemsTotal = [...this.props.cart].reduce((s, i) => s += i[1], 0);
        this.setState({cartEmpty: itemsTotal === 0});
    }

    getTotalPrice()
    {
        return [...this.props.cart].reduce((s, i) => s += this.getItemPrice(i[0]) * i[1], 0) + this.state.deliveryPrice;
    }

    getItemPrice(itemId)
    {
        let price = 0;
        this.state.items.forEach((i) => {
            if (i.id === itemId) {
                price = i.price;
            }
        });

        return price;
    }

    render()
    {
        if (this.state.cartEmpty) {
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            Your cart is empty.
                        </div>
                    </div>
                    <a href="/">Back to menu...</a>
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

                <div className="mt-3">+{this.state.deliveryPrice} for delvery</div>

                <div className="mt-3">Total price: {this.getTotalPrice()}</div>

                {this.state.cartEmpty ? '' : (
                    <OrderForm></OrderForm>
                )}
            </div>

        );
    }
}

export default Cart;