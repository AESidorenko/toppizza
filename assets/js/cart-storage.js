class CartStorage
{
    constructor()
    {
        this.cart = new Map();

        this.save                 = this.save.bind(this);
        this.exists               = this.exists.bind(this);
        this.touch                = this.touch.bind(this);
        this.reset                = this.reset.bind(this);
        this.updateIdempotencyKey = this.updateIdempotencyKey.bind(this);
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

    updateIdempotencyKey()
    {
        const key = this.generateIdempotencyKey();

        localStorage.setItem('idempotencyKey', key);

        return key;
    }

    generateIdempotencyKey()
    {
        let key                = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              charactersLength = characters.length;

        for (var i = 0; i < 16; i++) {
            key += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return key;
    }

    getIdempotencyKey()
    {
        return localStorage.setItem('idempotencyKey', key) ?? this.updateIdempotencyKey();
    }
}

export default CartStorage;