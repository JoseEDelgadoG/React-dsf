import React, { useState, useEffect } from 'react';
import { balls } from '../components/balls';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [objeto, setObjeto] = useState([]);

    // useEffect    
    useEffect(() => {
        setTimeout(() => {
          setObjeto(balls);
        }, 2000);
    });

    console.log(objeto);

    return (
        <div>
            <ItemList Items={objeto} />
        </div>
    )
}

export default ItemListContainer;
