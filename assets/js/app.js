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
import $ from 'jquery';

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
        this.MenuElement     = React.createElement(Menu, {cart: this.cart});
        this.MiniCartElement = React.createElement(MiniCart, {cart: this.cart});

        ReactDOM.render(this.MenuElement, document.getElementById(menuSelector));
        this.miniCart = ReactDOM.render(this.MiniCartElement, document.getElementById(miniCartSelector));
    }

    addToCart(itemId)
    {
        this.cart.set(itemId, this.cart.has(itemId) ? (this.cart.get(itemId) + 1) : 1);
        this.saveCartToLocalStorage();
    }

    removeFromCart(itemId)
    {
        let count = (this.cart.get(itemId) ?? 1) - 1;
        this.cart.set(itemId, count > 0 ? count : 0);
        this.saveCartToLocalStorage();
    }

    isUserLoggedIn()
    {
        // var userData = $('#js-user-data').data('profile');
        return false;
    }

    resetCart()
    {
        this.cart.clear();
        this.saveCartToLocalStorage();
    }

    loadCartFromLocalStrorage()
    {
        this.cart = new Map(JSON.parse(localStorage.getItem('cart')));
    }

    saveCartToLocalStorage()
    {
        localStorage.setItem('cart', JSON.stringify(Array.from(this.cart.entries())));
        if (typeof (this.miniCart) !== 'undefined') {
            this.miniCart.update(this.cart);
        }
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