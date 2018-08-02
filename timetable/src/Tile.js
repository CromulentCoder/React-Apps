import React from 'react';

export class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let day = this.props.day;
        this.props.onClick(day);
    }

    render() {
        return (
            <li>
            <button onClick = {this.handleClick}>{this.props.day}</button>
            </li>
        )
    }
}
