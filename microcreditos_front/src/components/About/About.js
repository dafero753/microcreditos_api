import React from 'react'
import CustomAccordion from '../elements/CustomAccordion'
import "bootstrap/dist/css/bootstrap.min.css"
import { Alert } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'


export default class About extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : [
                {titulo: "titulo 1", texto : "texto 1"},
                {titulo: "titulo 2", texto : "texto 2"},
                {titulo: "titulo 3", texto : "texto 3"},
                {titulo: "titulo 4", texto : "texto 4"},
            ]
        }
    }

    render(){
        return(
            <div>
            <h1>ALERTS</h1>
            <Alert variant="primary">Alert warning</Alert>
            <Alert variant="secondary">Alert warning</Alert>
            <Alert variant="success">Alert warning</Alert>
            <Alert variant="danger">Alert warning</Alert>
            <Alert variant="info">Alert warning</Alert>
            <Alert variant="light">Alert warning</Alert>
            <Alert variant="dark">Alert warning</Alert>
            <Alert variant="warning">Alert warning</Alert>
            

            <h1>ACORDIONS</h1>
            {
                      <CustomAccordion
                      tabs = {this.state.content}
                      />
            }    

            <h1>CONTAINERS</h1>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>2 of 9</Col>
                    <Col>1 of 9</Col>
                    <Col>3 of 9</Col>
                    <Col>4 of 9</Col>
                    <Col>5 of 9</Col>
                    <Col>6 of 9</Col>
                    <Col>7 of 9</Col>
                    <Col>8 of 9</Col>
                    <Col>9 of 9</Col>
                </Row>
            </Container>
                
            </div>
        )
    }

}