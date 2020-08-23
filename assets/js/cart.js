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
import CartStorage from './cart-storage';
import Cart from './components/Cart';
import ReactDOM from 'react-dom';
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.

let CartApp = new class Application
{
    constructor()
    {
        this.cartStorage = new CartStorage();

        this.cartStorage.load();

        this.init                   = this.init.bind(this);
        this.handleItemCountChanged = this.handleItemCountChanged.bind(this);
    }

    init(cartSelector)
    {
        if (!this.cartStorage.exists()) {
            // todo: also add a check if cart is obsolete
            window.location = '/';
        }

        this.CartElement = React.createElement(Cart, {
            cart:               this.cartStorage.cart,
            onItemCountChanged: this.handleItemCountChanged,
        });

        this.cartObject = ReactDOM.render(this.CartElement, document.getElementById(cartSelector));
    }

    handleItemCountChanged(itemId, newValue)
    {
        this.cartStorage.cart.set(itemId, newValue > 0 ? newValue : 0);
        this.cartStorage.save();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    CartApp.init('cart');
});

export default CartApp;