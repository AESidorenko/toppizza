class CartStorage
{
    constructor()
    {
        this.cart = new Map();

        this.save   = this.save.bind(this);
        this.exists = this.exists.bind(this);
        this.touch  = this.touch.bind(this);
        this.reset  = this.reset.bind(this);
    }

    load()
    {
        const cartJson = localStorage.getItem('cartItems');
        this.cart      = cartJson === null ? new Map() : new Map(JSON.parse(cartJson));
    }

    save()
    {
        localStorage.setItem('cartItems', JSON.stringify([...this.cart]));
        localStorage.setItem('cartUpdated', Date.now().toString());
    }

    exists()
    {
        return localStorage.getItem('cartItems') !== null;
    }

    touch()
    {
        if (!this.exists()) {
            this.reset();
        } else {
            localStorage.setItem('cartUpdated', Date.now().toString());
        }
    }

    reset()
    {
        this.cart.clear();
        this.save();
    }
}

export default CartStorage;