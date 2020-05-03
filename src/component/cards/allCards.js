import React from 'react';
import Card from './cards';
import {Container,Row,Col} from 'reactstrap';
import './cards.css'
const allCards=(props)=>{
    return(
        <Container fluid>
            <Row style={{padding:"45px"}}>
                <Col md="4">
                    <Card title="Books"  assignName="bookStyle"></Card>
                </Col>
                <Col md="4">
                    <Card title="Movies" assignName="movieStyle"></Card>
                </Col>
                <Col md="4">
                    <Card title="Food" assignName="dishStyle"></Card>
                </Col>
            </Row>
        </Container>
            
        
    )
}
export default allCards