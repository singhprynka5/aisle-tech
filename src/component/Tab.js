import React from 'react';
import { Badge } from 'react-bootstrap';

function Tab(props) {
    return (
        <Badge variant="light" className="tabBadge">
            <img src={props.src} className="iconImg" />
            <span>{props.title}</span>
        </Badge>
    );
}

export default Tab;