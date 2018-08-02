import React from 'react';

export class DayView extends React.Component {

    render() {
        let currentView = this.props.view;
        if (currentView === "Monday"){
            return <h1>Hello day chosen is: {this.props.view} M</h1>;
        } else if (currentView === "Tuesday") {
            return <h1>Hello day chosen is: {this.props.view} Tu</h1>;
        } else if (currentView === "Wednesday") {
            return <h1>Hello day chosen is: {this.props.view} W</h1>;
        } else if (currentView === "Thursday") {
            return <h1>Hello day chosen is: {this.props.view} Th</h1>;
        } else if (currentView === "Friday") {
            return <h1>Hello day chosen is: {this.props.view} F</h1>;
        } else if (currentView === "Saturday") {
            return <h1>Hello day chosen is: {this.props.view} Sa</h1>;
        } else if (currentView === "Sunday") {
            return <h1>Hello day chosen is: {this.props.view} Su</h1>;
        }

    }
}