import React from "react";

// const About = () => {
//     return (<>
//         <h1>
//             ABOUT
//         </h1>
//     </>)
// }

// export default About;

class About extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            toggleName: this.props.name,
            toggleGreeting: this.props.greeting
        }

    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            console.log("Inside time function");
        },2000);
        console.log("------> DID MOUNT");
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.toggleName !== prevState.toggleName) {
            console.log("State of toggleName changed");
        }
        if(this.state.toggleGreeting !== prevState.toggleGreeting) {
            console.log("State of toggleGreeting changed");
        }
        console.log("------> DID UPDATE");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("------> WILL UNMOUNT")
    }

    render() {
        return (
            <>
                <h2>{this.state.toggleGreeting}, {this.state.toggleName}</h2>
                <button onClick={() => {
                    return (this.state.toggleName === "Akshit" ? this.setState({ toggleName: "Ananya" }) : this.setState({ toggleName: "Akshit" }))
                }}>Toggle name</button>
                <button onClick={() => {
                    return (this.state.toggleGreeting === "Hello" ? this.setState({ toggleGreeting: "What's up" }) : this.setState({ toggleGreeting: "Hello" }))
                }}>Toggle greeting</button>
            </>
        )
    }
}

export default About;