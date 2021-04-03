import React from 'react';
import { Card, Col } from 'react-bootstrap';

import './CardComponent.css';

function CardComponent(props) {
    return (

        <Card as = {Col} xl style = {{border: "none"}}>
            <Card.Img variant="top" src= {props.src} style = {{height: "196px", width: "196px", borderRadius: "7px 7px 7px 7px"}}/>
            <Card.Body>
                <Card.Text className = "card__text">
                    {props.categoryName1}
                    <br/>
                    {props.categoryName2}
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
}

export default CardComponent;
