import React from 'react'
import './styles.css'

export default class Button extends React.Component{
    constructor (props){
        super(props)

    }
  

    componentDidMount(){
        console.log("estoy renderisando")
    }

    click() {
        console.log("click")        
    }
  
    render(){
               
        return(
        <div className= "button" onClick={this.click}>
            {this.props.tag}
        </div>
        )
    }
}