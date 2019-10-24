import React from 'react'
import './styles.css'

export default class MagicBox extends React.Component{
 
    constructor(props){
        super(props)

        this.state = {
            textMessage: ""
        }
    }

    getText = (e) => {
        console.log(e.target.value)
        const prew = ""

        /*if(e.target.value.length>3){
            console.log("mayor de 3")
        }*/
        /*

        e.target.value.length>3 ? console.log("Mayor")
        : console.log("menor")

        this.setState({
            textMessage: `${prew}${e.target.value}`
        })*/
    }

    click = (e) => {
        e.preventDefault()
        console.log("click", e, e.target.elements[0].value)
        this.setState({
            textMessage: e.target.elements[0].value
        })
    }

    render(){
        return(
            <div className="magic-box">

                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>


                <form onSubmit= { (event)=> this.click(event) }>
                <input type="text" onKeyUp={(event)=>this.getText(event)}>
                </input>
                <button>ENVIAR</button>
                </form>


                <div className={`mensaje_container 
                    ${this.state.textMessage
                    ?"bg-red"
                    :"bg-blue"
                }`}
                >
                    <spam>El texto es: </spam>{this.state.textMessage}
                    
                </div>

            </div>
        )
    }
}
