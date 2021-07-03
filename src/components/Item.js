import React from 'react';

function Item (props) {
    return (
        <>
            <div>
                {props.nombre}
                <img src={props.url}></img>
            </div>
        </>
    )
}

export default Item;