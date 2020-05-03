import React from 'react'
import {Row,Col} from 'reactstrap';
import FeaturedBooksComponent from './featuredBooksComponent';
import './fetauredBooks.css';
export default function fetauredBooks() {
    return (
        <div>
            <div className="title-bar">
            <h5><u>#Featured Books</u></h5>
            </div>
            <div>
                <br></br>
                <Row style={{margin:"10px",padding:"0px"}}>
                    <Col md="3">
                    <FeaturedBooksComponent header="Rich Dad and Poor Day" author="paul heman" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Power Of Subconsicious Mind" author="heman masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Sceret" author="good masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="Forest Men" author="masti ggod" ></FeaturedBooksComponent>
                    </Col>
                </Row>
                <br></br>
                <Row style={{margin:"10px",padding:"0px"}}>
                    <Col md="3">
                    <FeaturedBooksComponent header="Rich Dad and Poor Day" author="paul heman" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Power Of Subconsicious Mind" author="heman masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Sceret" author="good masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="Forest Men" author="masti ggod" ></FeaturedBooksComponent>
                    </Col>
                </Row>
                <br></br>
                <Row style={{margin:"10px",padding:"0px"}}>
                    <Col md="3">
                    <FeaturedBooksComponent header="Rich Dad and Poor Day" author="paul heman" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Power Of Subconsicious Mind" author="heman masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="The Sceret" author="good masti" ></FeaturedBooksComponent>
                    </Col>
                    <Col md="3">
                    <FeaturedBooksComponent header="Forest Men" author="masti ggod" ></FeaturedBooksComponent>
                    </Col>
                </Row>
            <br></br>
           
            </div>
        </div>
    )
}
