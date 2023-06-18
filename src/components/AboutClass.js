import React from "react";
import Profile from "./ProfileClass";

// or we can also write 
// import {Component} from "react";
// class About extends Component

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor")
    }
    componentDidMount(){
        console.log("Parent-componentDidMount")
    }
    render(){
        console.log("Parent-render")
        return (
            <div>
                <h1>About us page</h1>
                <p>This is namaste live course</p>
                {/* <Profile name="RaniClass" xyz="abc"/> */}
                <Profile name="First Child" xyz="abc"/>
                {/* <Profile name="Second Child" xyz="abc"/> */}
            </div>
        )
    }
}
export default About;

// output when there is 2 child(name=First child and second child)
/**
 * Parent Constructor
 * Parent render
 * First Child Constructor
 * First Child render
 * Second Child Constructor
 * Second Child render
 * First Child componentDidMount
 * Second Child componentDidMount
 * Parent componentDidMount
 */