import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Col } from 'react-bootstrap';

import './KnowMoreCard.css';

function KnowMoreCard(props) {
    return (

        <Card as = {Col} md = "5" style = {{borderRadius: "7px", border: "1px solid #E5E5E5", textAlign: "left", marginLeft: "auto", marginRight: "auto"}}>
            <Card.Body>
                <Card.Title className = "know__more__title" style = {{fontSize: "60px", fontWeight: "700", color: "#354493", letterSpacing: "0.023em"}}>{props.title}</Card.Title>
                <Card.Text className = "know__more__text">
                    {props.text}
                </Card.Text>
                <Link className = "know__more__link" to = "/know-more">{props.link}</Link>
            </Card.Body>
        </Card>
        
    );
}

export default KnowMoreCard;
