import React from 'react';
import Item from './Item';

function ItemList (props) {
    return (
        <>
            {
            props.Items.map((ball) =>(
                <div>
                    <Item nombre = {ball.nombre} url={ball.url}/>
                </div>
            )) 
        }
        </>
    )
}

export default ItemList;