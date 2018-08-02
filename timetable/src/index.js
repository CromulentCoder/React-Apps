import React from 'react';
import ReactDOM from 'react-dom';
import {Tile} from './Tile.js';
import {DayView} from './DayView.js';
import './index.css';

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            view : "home"
        };
        this.onClick = this.onClick.bind(this);
    }

    listTiles () {
        let listTile = this.state.days.map((dayName,key) => 
        <Tile 
            key = {key} 
            day = {dayName} 
            onClick = {this.onClick} 
            clicked = {false}/>);
        return listTile;
    }

    onClick(day) {
        let newDay = "";
        if (this.state.days.includes(day))
            newDay += day;
        else 
            newDay = "home"
        this.setState({view : newDay});
    }
 
    render() {
        if (this.state.view === "home"){
            return (
                <div className = "main">
                    <h1> Time Table </h1>
                    <ul className = "list">
                        {this.listTiles()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <DayView view = {this.state.view} />
                    <button onClick = {this.onClick}>Go back</button>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <TimeTable />,
    document.getElementById('app')
);
