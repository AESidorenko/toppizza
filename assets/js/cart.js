import '../css/app.scss';
import 'bootstrap';
import React from 'react';
import CartStorage from './cart-storage';
import Cart from './components/Cart';
import ReactDOM from 'react-dom';
import Currency from './components/Currency';
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.

let CartApp = new class Application
{
    constructor()
    {
        this.cartStorage  = new CartStorage();
        this.currencyCode = this.cartStorage.getCurrency();

        this.cartStorage.load();

        this.init                   = this.init.bind(this);
        this.handleItemCountChanged = this.handleItemCountChanged.bind(this);
        this.handleCurrencyChange   = this.handleCurrencyChange.bind(this);
    }

    init(cartSelector, currencySelector)
    {
        if (!this.cartStorage.exists()) {
            // todo: also add a check if cart is obsolete
            window.location = '/';
        }

        this.CartElement = React.createElement(Cart, {
            cart:               this.cartStorage.cart,
            onItemCountChanged: this.handleItemCountChanged,
            currencyCode:       this.currencyCode,
        });

        this.CurrnecyElement = React.createElement(Currency, {
            value:    this.currencyCode,
            onChange: this.handleCurrencyChange,
        });

        ReactDOM.render(this.CurrnecyElement, document.getElementById(currencySelector));
        this.cartObject = ReactDOM.render(this.CartElement, document.getElementById(cartSelector));
    }

    handleCurrencyChange(currencyCode)
    {
        this.cartStorage.setCurrency(currencyCode);
        this.currencyCode = currencyCode;
        this.cartObject.setCurrencyCode(currencyCode);
    }

    handleItemCountChanged(itemId, newValue)
    {
        this.cartStorage.cart.set(itemId, newValue > 0 ? newValue : 0);
        this.cartStorage.save();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    CartApp.init('cart', 'currency-container');
});

export default CartApp;