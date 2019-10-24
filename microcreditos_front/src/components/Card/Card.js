import React from "react"
import "./styles.css"
import Buttom from "../Button";

export default class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            click: false,
        }
    }

    click = (event) => {
        event.preventDefault()
        console.log("click", event)
        this.setState({
            click: !this.state.click
        })
    }

    render(){
        return(
    
             <div className={`card 
                    ${this.state.click
                    ?"bg-pink"
                    :"bg-blue"
                }`}>
                        <img src={this.props.image}></img>
                        <h2>ID:{this.props.id}</h2>
                        <h3>NAME:{this.props.name}</h3>
                
                        <button onClick= { (event)=> this.click(event) }>+</button>
                    
            </div>
        )
    }
       
}