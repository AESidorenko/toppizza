import React, {Component} from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            items:   [],
            loading: true,
        };

        this.itemRefs = [];

        this.loadItems = this.loadItems.bind(this);
    }

    componentDidMount()
    {
        this.loadItems();
    }

    loadItems()
    {
        axios.get(`/api/menu`)
            .then(items => {
                this.itemRefs = Array(items.data.length).fill(null).map(() => React.createRef());
                this.setState({items: items.data, loading: false});
            });
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
                        {this.state.items.map((item, index) =>
                            <div className="col-12 col-xs-6 col-sm-4" key={item.id}>
                                <MenuItem item={item}
                                          itemCount={this.props.cart.get(item.id) ?? 0}
                                          onCountChanged={this.props.onItemCountChanged}
                                          ref={this.itemRefs[index]}
                                ></MenuItem>
                            </div>, this,
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;