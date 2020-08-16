import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

class Menu extends Component
{
    constructor()
    {
        super();
        this.state = {items: [], loading: true};
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        axios.get(`/api/menu`).then(items => {
            this.setState({items: items.data, loading: false});
        });
    }

    getCountFromCart()
    {
        return parseInt(Math.random() * 5);
    }

    render()
    {
        return (
            <div>
                {this.state.loading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <div className={'row'}>
                        {this.state.items.map(item =>
                            <div className="col-12 col-xs-6 col-sm-4" key={item.id}>
                                <MenuItem item={item} count={this.getCountFromCart(item.id)}></MenuItem>
                            </div>,
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;