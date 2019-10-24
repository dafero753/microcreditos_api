import React from 'react'
import Card from '../Card'
import './styles.css'

export default class Grid extends React.Component{

    constructor(){
        super()

        this.state = {
            vCharacters: [
                {id: 1, name:"Rick"},
                {id: 2, name:"Morty"}
            ]
        }
    }
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then((res)=>{
            this.setState({
                vCharacters: res.results
            })
        })
    }

    render(){
        return(
            
            <div className="Grid">
        
                
                {
                    this.state.vCharacters.map(item =>(
                      <Card
                      image={item.image}
                      id={item.id}
                      name={item.name}
                      />
                    ))
                }
               
            </div>
        )
    }
}