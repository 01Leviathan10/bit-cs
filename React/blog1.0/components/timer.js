import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: (new Date()).toString()
        };

        setInterval(() => {
            this.setState({
                time: (new Date()).toString()
            });
        }, 1000);
    }


    render() {
        return (
            <div>
                <p>{this.state.time}</p>
            </div>
        );
    }
}

export default Timer;