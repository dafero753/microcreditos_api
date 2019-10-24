import React from 'react'
import Container from 'react-bootstrap/Container'
import Menu from '../Menu'
import Nav from 'react-bootstrap/Nav'
import './style.scss'

export default class Layout extends React.Component{
    render(){
        return(
            <Container fluid className="Layout">
                <header className="d-flex justify-content-center flex-column align-items-center">
                    <h1 calssName="title">INVESTCREDIT</h1>
                    
                    <Menu></Menu>
                    
                </header>
                <Container className="dinamic-content">
                    {this.props.children}
                </Container>
                <footer>
                    <h6>
                        Create by: Daniel Fernando Romero Rodriguez
                    </h6>
                    <h6>
                        Github: <a href="https://github.com/dafero753" target="_blank">Daniel´s github</a>
                    </h6>
                    <h6>
                    Linkedin: <Nav.Link className="d-inline p-0" href="https://linkedin.com/in/daniel-fernando-romero-rodriguez-385b2853/" target="_blank">Daniel´s Linkedin</Nav.Link>
                    </h6>
                </footer>
            </Container>

        )
    }
}