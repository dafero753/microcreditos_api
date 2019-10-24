import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export default class Menu extends React.Component{
    render(){
        return(
        <Nav
            activeKey="/home"
            //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/users">USERS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/credits">CREDITS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contacts">CONTACTS</Nav.Link>
            </Nav.Item>
        </Nav>
        )
    }
}