/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import MiniCart from './components/MiniCart';
import CartStorage from './cart-storage';
import Currency from './components/Currency';

let App = new class Application
{
    constructor()
    {
        this.MenuElement  = null;
        this.cartStorage  = new CartStorage();
        this.currencyCode = this.cartStorage.getCurrency();

        this.cartStorage.load();

        this.handleItemCountChanged = this.handleItemCountChanged.bind(this);
        this.handleCurrencyChange   = this.handleCurrencyChange.bind(this);
    }

    init(menuSelector, miniCartSelector, currencySelector)
    {
        this.cartStorage.touch();
        this.cartStorage.getIdempotencyKey();

        this.MiniCartElement = React.createElement(MiniCart, {cart: this.cartStorage.cart});
        this.CurrnecyElement = React.createElement(Currency, {
            value:    this.currencyCode,
            onChange: this.handleCurrencyChange,
        });
        this.MenuElement     = React.createElement(Menu, {
            cart:               this.cartStorage.cart,
            onItemCountChanged: this.handleItemCountChanged,
            currencyCode:       this.currencyCode,
        });

        ReactDOM.render(this.CurrnecyElement, document.getElementById(currencySelector));
        this.MenuObject     = ReactDOM.render(this.MenuElement, document.getElementById(menuSelector));
        this.miniCartObject = ReactDOM.render(this.MiniCartElement, document.getElementById(miniCartSelector));
    }

    handleCurrencyChange(currencyCode)
    {
        this.cartStorage.setCurrency(currencyCode);
        this.currencyCode = currencyCode;
        this.MenuObject.setCurrencyCode(currencyCode);
    }

    handleItemCountChanged(itemId, newValue)
    {
        this.cartStorage.cart.set(itemId, newValue > 0 ? newValue : 0);
        this.saveCart();
    }

    saveCart()
    {
        this.cartStorage.save();
        this.miniCartObject.updateFromCart();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init('menu', 'mini-cart', 'currency-container');
});

export default App;