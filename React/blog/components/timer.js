import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {mountTime: "Pedering..."};        
    }
    componentDidMount(){
        
        setInterval(()=>{
            this.setState({
                mountTime : new Date().toTimeString()
            });
        },this.props.interval);
    }
    render(){
        return(
            <p> {this.state.mountTime}</p>
        );
    }
}
export default Timer;