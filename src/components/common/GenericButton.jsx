import React from 'react';
import { Button } from 'react-bootstrap';

function GenericButton(props) {
    return (

        <Button style = {{backgroundColor: "#334ac0", color: "#fff", borderRadius: "5px", border: "1px solid #334ac0", fontSize: "16px", fontWeight: "700", letterSpacing: "0.023em"}}>{props.text}</Button>
       
    );
}

export default GenericButton;
