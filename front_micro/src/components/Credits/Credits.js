import React from 'react'
import Layout from '../Layout'
import { Form } from 'react-bootstrap'
import './styles.scss'

export default class Credits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    Value =(e)=>{
        console.log(e)
    }
    render() { 
        return (
            <Layout>
                <Form>
                <h1 className="title">Requested value</h1>
                <div className="value">
                $100.000<input type="range" class="custom-range" min="100000" max="1000000" id="customRange1" step="100000" onSubmit={(e)=>this.range}></input>$1´000.000
                </div>
                </Form>
                <Form>
                    <h1 className="title">Deferred</h1>
                <div className="value">
                1 month<input type="range" class="custom-range" min="1" max="6" id="customRange1" onSubmit={(e)=>this.range}></input>6 months
                </div>
                </Form>
            </Layout>
          );
    }
}
 
 
