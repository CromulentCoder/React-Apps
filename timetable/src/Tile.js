import React from 'react';

export class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li onClick = {>{this.props.day}</li>
        )
    }
}
