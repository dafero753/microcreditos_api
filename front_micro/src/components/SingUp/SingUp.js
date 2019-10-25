import React from 'react'
import Layout from '../Layout'
import { Container, Form, Button, Row, Col, Alert} from 'react-bootstrap'

import './styles.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    click = (e)=>{
        e.preventDefault()

        let data = {}

        if(e.target.elements[4].value === e.target.elements[5].value){
        data.name = e.target.elements[0].value           
        data.LastName = e.target.elements[1].value
        data.id = e.target.elements[2].value
        data.eMail = e.target.elements[3].value
        data.password = e.target.elements[4].value
        data.confirmPassword = e.target.elements[5].value

        //Create user in the api
        const URL = "https://morning-dusk-03146.herokuapp.com/api/users"
        // Request to create user whit POST method

            fetch(URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': "Application/json",
                    'Access-Control-Alow-Origin': "*",
                    'charset': 'UTF-8'
                    
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log('Ok', res)
            })
            .catch(err => {
                console.log("err", err)
            })
        }
        else{
            this.setState({
                error: true,
                errorMessage: "Password not match"
            })
        }

        console.log(data)

    }
    render() { 
        return (
           <div>
               <Layout>
               <Container className="initial-form">
                   {
                       this.state.error &&
                <Alert varient="danger" onClose={() => this.setState({error: false})} dismissible>
                    Error: {this.state.errorMessage}
                </Alert>
                   }
                <h1>Sing Up</h1>            
                <Form className="mio" onSubmit={(e)=>this.click(e)}>
                <Form.Group className="formBasicName">
                    <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" required placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="name" required placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Group>
                <Form.Group className="formBasicId">
                    <Row>
                    <Col>
                    <Form.Group>
                    <Form.Label>Id:</Form.Label>
                    <Form.Control type="id" required placeholder="Enter Id" />
                    </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group>
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control type="eMail" required placeholder="Enter E-mail" />
                    </Form.Group>
                </Form.Group>
                <Form.Group className="formBasicPassword">
                    <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" required placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="p
                    assword" required placeholder="Password" />
                    </Form.Group>
                </Form.Group>
                <Button variant="primary" type="buttom" onClick={
                    () => this.props.history.push("./")
                }>
                    Sing up
                </Button>
                </Form>             
                </Container>
               </Layout>
           </div>
          );
    }
}