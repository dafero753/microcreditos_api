import React from 'react'
import Layout from '../Layout'
import { Form, Button, Container} from 'react-bootstrap'
import './styles.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    click = (e)=>{
        e.preventDefault()
        
        const user = e.target.elements[0].value
        const password = e.target.elements[1].value

        console.log("User:", user, "Password", password)
    }
    render() { 
        return (
            <Layout className="border">
                <Container className="initial-form">
                <h1>Login</h1>
                <Form onSubmit={(e)=>this.click(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button variant="primary" type="buttom" onClick={
                    () => this.props.history.push("./sing-up")
                }>
                    Sing up
                </Button>
                </Form>
                </Container>
            </Layout>
          );
    }
}
 
 
