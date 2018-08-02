import React from 'react';
import ReactDOM from 'react-dom';
import {Tile} from './Tile.js';
import './index.css';

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        };
    }

    listTiles () {
        let listTile = this.state.days.map((dayName,key) => <Tile key = {key} day = {dayName}/>);
        return listTile;
    }

    render() {
        return (
            <div id = "main">
                <ul id = "list">
                    {this.listTiles()}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <TimeTable />,
    document.getElementById('app')
);
