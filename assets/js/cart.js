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
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.

let Cart = new class Application
{
    constructor()
    {
    }

    init(menuSelector)
    {
        // this.MenuElement     = React.createElement(Menu, {cart: this.cart});
        // this.MiniCartElement = React.createElement(MiniCart, {cart: this.cart});
        //
        // ReactDOM.render(this.MenuElement, document.getElementById(menuSelector));
        // this.miniCartObject = ReactDOM.render(this.MiniCartElement, document.getElementById(miniCartSelector));
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Cart.init('cart');
});

export default Cart;