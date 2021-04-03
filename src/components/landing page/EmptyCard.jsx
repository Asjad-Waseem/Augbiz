import React from 'react';
import { Card, Col } from 'react-bootstrap';

import './EmptyCard.css';

function EmptyCard() {

    return (
        
        <Card as = {Col} xl className = "empty__card" style = {{borderRadius: "7px 7px 7px 7px"}}>
            <Card.Body style = {{height: "196px", width: "196px"}}/>
        </Card>
           
    );
}

export default EmptyCard;
