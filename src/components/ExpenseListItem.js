import React from 'react';

export default (props)=>(
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} -{props.createdAt}</p>
    </div>
);