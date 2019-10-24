import React from 'react'
import './styles.css'

export default class RandomNumber extends React.Component{
 
    constructor(props){
        super(props)

        this.state = {
            textMessage: ""
        }
    }

    click = (e) => {
        e.preventDefault()
        console.log("click", e)
        var aleatorio = Math.round(Math.random()*100);
        this.setState({
            textMessage: aleatorio
        })
    }

    render(){
        return(
            <div className="random-number">

                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>


                <form onSubmit= { (event)=> this.click(event) }>
                <button>GENERAR NUMERO</button>
                </form>


                <div className= "box-number">  
                {this.state.textMessage}
                </div>

            </div>
        )
    }
}


