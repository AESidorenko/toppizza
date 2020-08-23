/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
import 'bootstrap';
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.

import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import MiniCart from './components/MiniCart';

let App = new class Application
{
    constructor()
    {
        this.cart        = new Map();
        this.MenuElement = null;
    }

    init(menuSelector, miniCartSelector)
    {
        App.touchCart();

        this.MiniCartElement = React.createElement(MiniCart, {cart: this.cart});
        this.MenuElement     = React.createElement(Menu, {cart: this.cart});

        this.menuObject     = ReactDOM.render(this.MenuElement, document.getElementById(menuSelector));
        this.miniCartObject = ReactDOM.render(this.MiniCartElement, document.getElementById(miniCartSelector));
    }

    addToCart(itemId)
    {
        App.touchCart();

        if (this.cart.has(itemId)) {
            this.cart.set(itemId, this.cart.get(itemId) + 1);
        } else {
            this.cart.set(itemId, 1);
        }

        this.saveCart();
    }

    saveCart()
    {
        localStorage.setItem('cartItems', JSON.stringify([...this.cart]));
        localStorage.setItem('cartUpdated', Date.now().toString());

        this.miniCartObject.updateFromCart();
    }

    removeFromCart(itemId)
    {
        App.touchCart();

        if (this.cart.has(itemId)) {
            let count = this.cart.get(itemId) - 1;
            this.cart.set(itemId, count > 0 ? count : 0);
        } else {
            this.cart.set(itemId, 0);
        }

        this.saveCart();
    }

    resetCart()
    {
        this.cart.clear();
        this.saveCart();
    }

    cartExists()
    {
        return localStorage.getItem('cartItems') !== null;
    }

    touchCart()
    {
        if (!this.cartExists()) {
            this.resetCart();
        } else {
            localStorage.setItem('cartUpdated', Date.now().toString());
        }
    }

    getCountInCart(id)
    {
        return this.cart.get(id);
    }

    getCart()
    {
        return this.cart;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    App.init('menu', 'mini-cart');
});

export default App;