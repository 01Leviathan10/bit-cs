import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mountTime: "pending...",
            tekstDugmeta: "Hoces vreme?"
        };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        if (this.intervalActivity) {
            clearInterval(this.intervalActivity);
            this.intervalActivity = null;
            this.setState({tekstDugmeta:"Start"});
            return;
        }
        this.setState({tekstDugmeta:"Stop"});
        this.intervalActivity = setInterval(() => {
            this.setState({
                mountTime: new Date().toTimeString()
            });
        }, this.props.interval);


    }

    render() {
        this.props.callback();
        return <span>
            <h4>Current time: {this.state.mountTime}</h4>
            <button onClick={this.startTimer}>{this.state.tekstDugmeta}</button>
        </span>;
    }
}

export default Timer;