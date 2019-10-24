import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Accordion, Card, Button } from 'react-bootstrap'


export default class CustomAccordion extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){

        return(

            <Accordion defaultActiveKey="0">
                {
                    this.props.tabs.map((item, i) => (
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                        {item.titulo}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i}>
                        <Card.Body>{item.texto}</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    ))                    
        }
          </Accordion>
        )
    }
}