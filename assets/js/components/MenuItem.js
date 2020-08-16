import React, {Component} from 'react';

class MenuItem extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render()
    {
        return (
            <div className="card mb-4">
                <img className="card-img-top" src={'https://img.pizza/350/250?' + Math.random().toString()} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{this.props.item.title}</p>
                </div>
                <div className="card-footer">footer</div>
            </div>
        );
    }
}

export default MenuItem;