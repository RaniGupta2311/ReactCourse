import React from "react"
class Profile extends React.Component{
    // constructor(props){
        // super(props);
        //  create state
        // this.state={
        //     count:0,
        //     count2:1
        // };
        // console.log("child-constructor");
        // console.log("child-constructor"+this.props.name)
    // }

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                avatar_url:"",
                name:"",
                location:""
            }
        }
        console.log("child-constructor"+this.props.name)
    }

    async componentDidMount(){
        // API calls
        const data=await fetch("https://api.github.com/users/Ranigupta2311");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        console.log("child-componentDidMount"+this.props.name);
        
        // USE CASE OF componentWillUnmout
        // this.timer=setInterval(()=>{
        //     console.log("NAMASTE REACT OP")
        // },1000)
    }

    // changing the sequence of console  json and child-componentDidMount in componentDidMount
    // async componentDidMount(){
    //     console.log("child-componentDidMount"+this.props.name);
    //     // API calls
    //     const data=await fetch("https://api.github.com/users/Ranigupta2311");
    //     const json=await data.json();
    //     console.log(json);
    //     this.setState({
    //         userInfo:json
    //     })
    // }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count){

        }

        console.log("child-componentDidUpdate")

    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("child-componentWillUnmount")
    }

    render(){
        // const {count}=this.state;
        console.log("child-render" + this.props.name);
        return (
            <div>
                <h2>Profile Class Component</h2>
                {/* <h3>name: {this.props.name}</h3>
                <h4>XYZ: {this.props.xyz}</h4>
                <h3>Count: {this.state.count}</h3>
                <h3>Count2:{this.state.count2}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:1,
                        count2:2
                    })
                }}>count</button> */}
                {/* <img src={this.state.userInfo}/> */}
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Locaion: {this.state.userInfo.location}</h2>
            </div>
        )
        
    }
}
export default Profile;