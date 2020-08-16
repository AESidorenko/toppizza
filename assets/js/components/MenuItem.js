import React, {Component} from 'react';

class MenuItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            count: props.count,
        };

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(e)
    {
    }

    render()
    {
        return (
            <div className="card mb-4">
                {/* todo: make real images URL */}
                <img className="card-img-top" src={'https://img.pizza/350/250?' + Math.random().toString()} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{this.props.item.title}</p>
                </div>
                <div className="card-footer">
                    {
                        this.props.count === 0 ? (
                            <button
                                className="btn btn-success btn-add-to-cart"
                                id={'add-to-cart-' + this.props.item.id.toString()}
                                onClick={this.addToCart}
                            >Add to cart</button>
                        ) : (
                            <p>In the cart</p>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MenuItem;